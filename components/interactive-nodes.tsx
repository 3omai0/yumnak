"use client";
import React, { useCallback, useMemo, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  BackgroundVariant,
  useReactFlow,
  ReactFlowProvider
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEffect } from 'react';

import {
  BrainCircuit, Cloud, Globe, ShieldCheck, Terminal,
  Layers, Smartphone, Workflow, Lightbulb, PenTool
} from "lucide-react";
import Image from "next/image";

// Override ReactFlow overflow so hover labels aren't clipped
const flowOverrideStyle = `
  .react-flow__renderer,
  .react-flow__pane,
  .react-flow__nodes,
  .react-flow__node,
  .react-flow__viewport,
  .react-flow__container {
    overflow: visible !important;
  }
  .react-flow__node:hover {
    z-index: 9999 !important;
  }
` as unknown as string;

// 1. Custom Service Node
const ServiceNode = ({ data }: any) => {
  const Icon = data.icon;
  const [hovered, setHovered] = useState(false);

  const handleNodeClick = () => {
    window.dispatchEvent(new CustomEvent('highlight-service', {
      detail: { label: data.label.trim(), color: data.color, border: data.border }
    }));
  };

  return (
    <div
      onClick={handleNodeClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: hovered ? 9999 : 10, position: 'relative', width: 104, height: 104 }}
      className="flex items-center justify-center pointer-events-auto"
    >
      <Handle type="target" position={Position.Top} id="top" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Bottom} id="bottom" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Left} id="left" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Right} id="right" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Top} id="src-top" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Bottom} id="src-bottom" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Left} id="src-left" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Right} id="src-right" className="!bg-transparent !border-none" />

      {/* Card — expands toward expandDir on hover */}
      {data.expandDir === 'left' ? (
        // Expand LEFT: anchor card to right edge, label appears to the left of icon
        <div
          style={{ zIndex: hovered ? 9999 : 10, position: 'absolute', right: 0, top: 0 }}
          className={`
            flex flex-row-reverse items-center p-3 rounded-2xl border backdrop-blur-md shadow-xl
            bg-white ${data.border}
            transition-all duration-300 ease-out cursor-pointer whitespace-nowrap
            ${hovered ? 'scale-105 shadow-2xl' : ''}
          `}
        >
          <div className={`w-20 h-20 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border ${data.color}`}>
            <Icon className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <div
            style={{
              maxWidth: hovered ? 200 : 0,
              opacity: hovered ? 1 : 0,
              overflow: 'hidden',
              marginRight: hovered ? 12 : 0,
              transition: 'max-width 0.3s ease, opacity 0.3s ease, margin-right 0.3s ease',
            }}
          >
            <span className="text-sm font-bold text-neutral-800 block">{data.label}</span>
          </div>
        </div>
      ) : (
        // Expand RIGHT: anchor card to left edge, label appears to the right of icon
        <div
          style={{ zIndex: hovered ? 9999 : 10, position: 'absolute', left: 0, top: 0 }}
          className={`
            flex items-center p-3 rounded-2xl border backdrop-blur-md shadow-xl
            bg-white ${data.border}
            transition-all duration-300 ease-out cursor-pointer whitespace-nowrap
            ${hovered ? 'scale-105 shadow-2xl' : ''}
          `}
        >
          <div className={`w-20 h-20 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border ${data.color}`}>
            <Icon className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <div
            style={{
              maxWidth: hovered ? 200 : 0,
              opacity: hovered ? 1 : 0,
              overflow: 'hidden',
              marginLeft: hovered ? 12 : 0,
              transition: 'max-width 0.3s ease, opacity 0.3s ease, margin-left 0.3s ease',
            }}
          >
            <span className="text-sm font-bold text-neutral-800 block">{data.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// 2. Custom Center Logo Node
const CenterNode = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center p-4">
      <Handle type="source" position={Position.Top} id="top" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Left} id="left" className="!bg-transparent !border-none" />
      <Handle type="source" position={Position.Right} id="right" className="!bg-transparent !border-none" />

      <Image
        src="/logo.png"
        alt="Yomnak"
        width={140}
        height={60}
        className="object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform"
      />
    </div>
  );
};

// ─── Layout ───────────────────────────────────────────────────────────────────
//  TOP    3 nodes  → evenly spaced horizontally above center
//  BOTTOM 3 nodes  → evenly spaced horizontally below center
//  RIGHT  2 nodes  → evenly spaced vertically to the right
//  LEFT   2 nodes  → evenly spaced vertically to the left
//
//  Canvas origin is top-left. Node box is 104×104; we subtract 52 so the
//  visual center of the box lands exactly on the intended coordinate.

const CX = 430;  // center X
const CY = 260;  // center Y — pulled up so top nodes sit near y=0

const RX = 320;  // horizontal reach (left / right nodes)
const RY = 240;  // vertical reach   (top / bottom nodes)
const GAP = 155;  // gap between sibling nodes on the same side

const off = 52;   // half of 104px node size

// ─── 3. Nodes ────────────────────────────────────────────────────────────────
const initialNodes = [
  // ── Center ──
  { id: 'center', type: 'center', position: { x: CX - 70, y: CY - 30 }, data: { label: 'YOMNAK' } },

  // ── TOP 3  (left · center · right) ──
  { id: 't1', type: 'service', position: { x: CX - GAP - off, y: CY - RY - off }, data: { label: 'الذكاء الاصطناعي', icon: BrainCircuit, color: 'text-blue-500', border: 'border-blue-100', expandDir: 'right' } },
  { id: 't2', type: 'service', position: { x: CX - off, y: CY - RY - off }, data: { label: 'الخدمات السحابية', icon: Cloud, color: 'text-emerald-500', border: 'border-emerald-100', expandDir: 'right' } },
  { id: 't3', type: 'service', position: { x: CX + GAP - off, y: CY - RY - off }, data: { label: 'تصميم المواقع', icon: Globe, color: 'text-brand', border: 'border-brand/20', expandDir: 'left' } },

  // ── RIGHT 2  (upper · lower) ──
  { id: 'r1', type: 'service', position: { x: CX + RX - off, y: CY - GAP / 2 - off }, data: { label: 'تخصيص الأنظمة', icon: Layers, color: 'text-amber-500', border: 'border-amber-100', expandDir: 'left' } },
  { id: 'r2', type: 'service', position: { x: CX + RX - off, y: CY + GAP / 2 - off }, data: { label: 'البرمجيات الخاصة', icon: Terminal, color: 'text-purple-500', border: 'border-purple-100', expandDir: 'left' } },

  // ── BOTTOM 3  (left · center · right) ──
  { id: 'b1', type: 'service', position: { x: CX - GAP - off, y: CY + RY - off }, data: { label: 'تطبيقات الجوال', icon: Smartphone, color: 'text-pink-500', border: 'border-pink-100', expandDir: 'right' } },
  { id: 'b2', type: 'service', position: { x: CX - off, y: CY + RY - off }, data: { label: 'الأمن السيبراني', icon: ShieldCheck, color: 'text-red-500', border: 'border-red-100', expandDir: 'right' } },
  { id: 'b3', type: 'service', position: { x: CX + GAP - off, y: CY + RY - off }, data: { label: 'أتمتة العمليات', icon: Workflow, color: 'text-indigo-500', border: 'border-indigo-100', expandDir: 'left' } },

  // ── LEFT 2  (upper · lower) ──
  { id: 'l1', type: 'service', position: { x: CX - RX - off, y: CY - GAP / 2 - off }, data: { label: 'الاستشارات', icon: Lightbulb, color: 'text-orange-500', border: 'border-orange-100', expandDir: 'right' } },
  { id: 'l2', type: 'service', position: { x: CX - RX - off, y: CY + GAP / 2 - off }, data: { label: 'تجربة المستخدم', icon: PenTool, color: 'text-teal-500', border: 'border-teal-100', expandDir: 'right' } },
];

// ─── 4. Edges ─────────────────────────────────────────────────────────────────
const edgeStyle = { stroke: 'var(--color-brand)', strokeWidth: 2.5 };

const initialEdges = [
  // TOP 3  — center top → node bottom
  { id: 'et1', source: 'center', sourceHandle: 'top', target: 't1', targetHandle: 'bottom', animated: true, style: edgeStyle },
  { id: 'et2', source: 'center', sourceHandle: 'top', target: 't2', targetHandle: 'bottom', animated: true, style: edgeStyle },
  { id: 'et3', source: 'center', sourceHandle: 'top', target: 't3', targetHandle: 'bottom', animated: true, style: edgeStyle },

  // RIGHT 2 — center right → node left
  { id: 'er1', source: 'center', sourceHandle: 'right', target: 'r1', targetHandle: 'left', animated: true, style: edgeStyle },
  { id: 'er2', source: 'center', sourceHandle: 'right', target: 'r2', targetHandle: 'left', animated: true, style: edgeStyle },

  // BOTTOM 3 — center bottom → node top
  { id: 'eb1', source: 'center', sourceHandle: 'bottom', target: 'b1', targetHandle: 'top', animated: true, style: edgeStyle },
  { id: 'eb2', source: 'center', sourceHandle: 'bottom', target: 'b2', targetHandle: 'top', animated: true, style: edgeStyle },
  { id: 'eb3', source: 'center', sourceHandle: 'bottom', target: 'b3', targetHandle: 'top', animated: true, style: edgeStyle },

  // LEFT 2  — center left → node right
  { id: 'el1', source: 'center', sourceHandle: 'left', target: 'l1', targetHandle: 'right', animated: true, style: edgeStyle },
  { id: 'el2', source: 'center', sourceHandle: 'left', target: 'l2', targetHandle: 'right', animated: true, style: edgeStyle },
];

// ─── Auto Fit View on Resize ──────────────────────────────────────────────────
function AutoFitView() {
  const { fitView } = useReactFlow();
  
  useEffect(() => {
    // Initial fit
    setTimeout(() => {
      fitView({ padding: 0.15, maxZoom: 1 });
    }, 50);

    const handleResize = () => {
      fitView({ padding: 0.15, maxZoom: 1 });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fitView]);
  
  return null;
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function InteractiveNodes() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ service: ServiceNode, center: CenterNode }), []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlowProvider>
      <style>{flowOverrideStyle}</style>
      <div className="w-full h-full min-h-[400px] md:min-h-[500px]" dir="ltr">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15, includeHiddenNodes: false }}
          style={{ overflow: "visible" }}
          minZoom={0.1}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
          zoomOnScroll={false}
          panOnDrag={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e5e5" />
          <AutoFitView />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}