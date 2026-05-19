"use client";
import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {
  BrainCircuit, Cloud, Globe, ShieldCheck, Terminal,
  Layers, Smartphone, Workflow, Lightbulb, PenTool
} from "lucide-react";
import Image from "next/image";

// 1. Custom Service Node
const ServiceNode = ({ data }: any) => {
  const Icon = data.icon;
  const handleNodeClick = () => {
    window.dispatchEvent(new CustomEvent('highlight-service', {
      detail: { label: data.label.trim(), color: data.color, border: data.border }
    }));
  };
  return (
    <div onClick={handleNodeClick} className="relative w-[104px] h-[104px] z-10 flex items-center justify-center pointer-events-auto">
      {/* We add 4 handles to the FIXED parent so the lines NEVER move or stretch */}
      <Handle type="target" position={Position.Top} id="top" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Bottom} id="bottom" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Left} id="left" className="!bg-transparent !border-none" />
      <Handle type="target" position={Position.Right} id="right" className="!bg-transparent !border-none" />

      {/* Visual expanding container anchored to the right so the icon stays perfectly still */}
      <div dir="rtl" className={`group absolute right-0 top-0 p-3 rounded-2xl border backdrop-blur-md shadow-xl flex items-center bg-white ${data.border} transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap`}>
        <div className={`w-20 h-20 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border ${data.color}`}>
          <Icon className="w-10 h-10" strokeWidth={1.5} />
        </div>
        <div className="max-w-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-w-[250px] group-hover:opacity-100 group-hover:mr-3">
          <span className="text-base font-bold text-neutral-800 block">{data.label}</span>
        </div>
      </div>
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

      <Image src="/logo.png" alt="Yomnak" width={140} height={60} className="object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" />
    </div>
  );
};

// 3. Define the Nodes and layout
const initialNodes = [
  {
    id: 'center',
    type: 'center',
    position: { x: 345, y: 330 },
    data: { label: 'YOMNAK' }
  },
  { id: '1', type: 'service', position: { x: 180, y: 140 }, data: { label: ' الذكاء الاصطناعي ', icon: BrainCircuit, color: "text-blue-500", border: "border-blue-100" } },
  { id: '2', type: 'service', position: { x: 400, y: 70 }, data: { label: 'الخدمات السحابية', icon: Cloud, color: "text-emerald-500", border: "border-emerald-100" } },
  { id: '3', type: 'service', position: { x: 630, y: 140 }, data: { label: 'تصميم المواقع', icon: Globe, color: "text-brand", border: "border-brand/20" } },
  { id: '4', type: 'service', position: { x: 750, y: 240 }, data: { label: 'تخصيص الأنظمة', icon: Layers, color: "text-amber-500", border: "border-amber-100" } },
  { id: '5', type: 'service', position: { x: 750, y: 460 }, data: { label: 'البرمجيات الخاصة', icon: Terminal, color: "text-purple-500", border: "border-purple-100" } },
  { id: '6', type: 'service', position: { x: 630, y: 570 }, data: { label: 'تطبيقات الجوال', icon: Smartphone, color: "text-pink-500", border: "border-pink-100" } },
  { id: '7', type: 'service', position: { x: 400, y: 630 }, data: { label: 'الأمن السيبراني', icon: ShieldCheck, color: "text-red-500", border: "border-red-100" } },
  { id: '8', type: 'service', position: { x: 180, y: 570 }, data: { label: 'أتمتة العمليات', icon: Workflow, color: "text-indigo-500", border: "border-indigo-100" } },
  { id: '9', type: 'service', position: { x: 50, y: 460 }, data: { label: 'الاستشارات', icon: Lightbulb, color: "text-orange-500", border: "border-orange-100" } },
  { id: '10', type: 'service', position: { x: 50, y: 240 }, data: { label: 'تجربة المستخدم', icon: PenTool, color: "text-teal-500", border: "border-teal-100" } },
];

// 4. Define connections (edges)
const initialEdges = [
  { id: 'e1', source: 'center', sourceHandle: 'top', target: '1', targetHandle: 'bottom', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e2', source: 'center', sourceHandle: 'top', target: '2', targetHandle: 'bottom', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e3', source: 'center', sourceHandle: 'top', target: '3', targetHandle: 'bottom', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e4', source: 'center', sourceHandle: 'right', target: '4', targetHandle: 'left', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e5', source: 'center', sourceHandle: 'right', target: '5', targetHandle: 'left', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e6', source: 'center', sourceHandle: 'bottom', target: '6', targetHandle: 'top', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e7', source: 'center', sourceHandle: 'bottom', target: '7', targetHandle: 'top', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e8', source: 'center', sourceHandle: 'bottom', target: '8', targetHandle: 'top', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e9', source: 'center', sourceHandle: 'left', target: '9', targetHandle: 'right', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
  { id: 'e10', source: 'center', sourceHandle: 'left', target: '10', targetHandle: 'right', animated: true, style: { stroke: 'var(--color-brand)', strokeWidth: 3 } },
];

export function InteractiveNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Register custom nodes
  const nodeTypes = useMemo(() => ({ service: ServiceNode, center: CenterNode }), []);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="w-full h-[400px] md:h-[450px] relative" dir="ltr">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        className="!overflow-visible"
        zoomOnScroll={false}
        panOnDrag={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e5e5e5" />
      </ReactFlow>
    </div>
  );
}
