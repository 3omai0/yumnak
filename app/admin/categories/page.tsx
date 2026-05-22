'use client';

import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Plus, Edit2, Trash2, Check, X, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function CategoriesDashboard() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newCategoryName, setNewCategoryName] = useState('');
  const [adding, setAdding] = useState(false);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  const fetchCategories = useCallback(async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('created_at', { ascending: true });

    if (!error && data) {
      setCategories(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  async function handleAddCategory() {
    if (!newCategoryName.trim()) return;
    setAdding(true);
    const { error } = await supabase.from('blog_categories').insert([{ name: newCategoryName.trim() }]);
    setAdding(false);
    
    if (error) {
      alert('حدث خطأ أثناء الإضافة. قد يكون التصنيف موجوداً مسبقاً.');
    } else {
      setNewCategoryName('');
      fetchCategories();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('هل أنت متأكد من حذف هذا التصنيف؟')) return;
    
    const { error } = await supabase.from('blog_categories').delete().eq('id', id);
    if (error) {
      alert('حدث خطأ أثناء الحذف.');
    } else {
      fetchCategories();
    }
  }

  async function handleSaveEdit(id: string) {
    if (!editName.trim()) return;
    const { error } = await supabase.from('blog_categories').update({ name: editName.trim() }).eq('id', id);
    
    if (error) {
      alert('حدث خطأ أثناء التعديل.');
    } else {
      setEditingId(null);
      fetchCategories();
    }
  }

  return (
    <div className="p-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-neutral-900 tracking-tight">إدارة التصنيفات</h1>
          <p className="text-neutral-500 mt-2 font-medium text-sm">أضف أو عدل أو احذف تصنيفات المقالات.</p>
        </div>
      </div>

      {/* Add New */}
      <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 items-end sm:items-center">
        <div className="flex-1 w-full">
          <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 block">إضافة تصنيف جديد</label>
          <input 
            type="text" 
            placeholder="مثال: الذكاء الاصطناعي"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand font-medium"
            onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
          />
        </div>
        <button
          onClick={handleAddCategory}
          disabled={adding || !newCategoryName.trim()}
          className="flex items-center gap-2 bg-brand text-white px-7 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 disabled:opacity-50 w-full sm:w-auto justify-center"
        >
          <Plus className="w-5 h-5" />
          إضافة
        </button>
      </div>

      {/* Categories List */}
      <div className="bg-white rounded-[2.5rem] border border-neutral-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="p-8 border-b border-neutral-100 flex items-center justify-between bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-black text-neutral-900">التصنيفات الحالية</h2>
        </div>
        <div className="p-4 sm:p-8">
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-8 text-neutral-300">
                <Tag className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-3">لا يوجد تصنيفات</h3>
              <p className="text-neutral-500 font-medium">ابدأ بإضافة تصنيف جديد من الأعلى.</p>
            </div>
          ) : (
            <div className="grid gap-3">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white border border-neutral-100 rounded-[1.5rem] p-5 flex items-center justify-between hover:border-brand/30 hover:shadow-[0_10px_40px_rgba(117,140,129,0.08)] transition-all duration-300 group">
                  
                  {editingId === cat.id ? (
                    <div className="flex-1 flex items-center gap-3">
                      <input 
                        type="text" 
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="bg-neutral-50 border border-brand rounded-lg px-4 py-2 text-sm outline-none w-full max-w-sm font-bold text-neutral-900"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(cat.id)}
                      />
                      <button onClick={() => handleSaveEdit(cat.id)} className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100">
                        <Check className="w-5 h-5" />
                      </button>
                      <button onClick={() => setEditingId(null)} className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center hover:bg-neutral-200">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand flex-shrink-0">
                          <Tag className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-neutral-900">{cat.name}</h3>
                          <p className="text-xs text-neutral-400 font-medium mt-1">أضيف في {format(new Date(cat.created_at), 'd MMMM yyyy', { locale: ar })}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
                        <button
                          onClick={() => {
                            setEditingId(cat.id);
                            setEditName(cat.name);
                          }}
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="تعديل"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
