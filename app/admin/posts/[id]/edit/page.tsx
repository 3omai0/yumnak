'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { ArrowRight, Image as ImageIcon, Loader2, Bold, Italic, Underline as UnderlineIcon, Strikethrough, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3 } from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Link from 'next/link';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState('');
  const [postId, setPostId] = useState<string>('');
  const [categories, setCategories] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: '',
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      ImageExtension,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'right',
      }),
      LinkExtension.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: 'اكتب محتوى المقال هنا...' }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] text-neutral-800 leading-loose prose-headings:font-black prose-p:leading-loose text-right',
      },
    },
  });

  useEffect(() => {
    async function loadPost() {
      const resolvedParams = await params;
      setPostId(resolvedParams.id);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          category: data.category,
        });
        if (data.image_url) {
          setCoverPreview(data.image_url);
        }
        if (editor) {
          editor.commands.setContent(data.content);
        }
      }
      setFetching(false);
    }
    
    async function loadCategories() {
      const { data } = await supabase.from('blog_categories').select('name').order('created_at', { ascending: true });
      if (data) {
        setCategories(data);
      }
    }

    if (editor) {
      loadPost();
      loadCategories();
    }
  }, [params, editor]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  };

  const insertEditorImage = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      if (input.files?.length) {
        const file = input.files[0];
        try {
          const url = await uploadImage(file);
          editor?.chain().focus().setImage({ src: url }).run();
        } catch (error) {
          alert('حدث خطأ أثناء رفع الصورة');
        }
      }
    };
    input.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor || !postId) return;

    setLoading(true);

    try {
      let imageUrl = coverPreview; // Keep existing if not changed
      
      // If user uploaded a new cover image file, upload it
      if (coverImage) {
        imageUrl = await uploadImage(coverImage);
      }

      const content = editor.getHTML();

      const { error } = await supabase.from('blog_posts').update({
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: formData.excerpt,
        category: formData.category,
        content: content,
        image_url: imageUrl,
      }).eq('id', postId);

      if (error) throw error;

      router.push('/admin/posts');
    } catch (error: any) {
      alert('حدث خطأ: ' + error.message);
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/posts" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors">
              <ArrowRight className="w-5 h-5 text-neutral-600" />
            </Link>
            <h1 className="text-xl font-black text-neutral-900">تعديل المقال</h1>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-dark transition-all shadow-md disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'حفظ التعديلات'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
          {/* Cover Image */}
          <div className="relative w-full h-64 bg-neutral-100 flex items-center justify-center border-b border-neutral-200 group">
            {coverPreview ? (
              <img src={coverPreview} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-neutral-400">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <span className="text-sm font-semibold">إضافة صورة غلاف</span>
              </div>
            )}
            <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <span className="bg-white text-neutral-900 px-4 py-2 rounded-full font-bold text-sm">تغيير الصورة</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>

          <div className="p-8 space-y-6">
            <input
              type="text"
              placeholder="عنوان المقال الرهيب..."
              className="w-full text-4xl font-black text-neutral-900 outline-none placeholder:text-neutral-300 bg-transparent"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            
            <textarea
              placeholder="اكتب نبذة مختصرة عن المقال (تظهر في البطاقات)..."
              className="w-full text-lg font-medium text-neutral-500 outline-none placeholder:text-neutral-300 resize-none bg-transparent"
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />

            <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-100">
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs font-bold text-neutral-400 uppercase block mb-1">الرابط المخصص (Slug)</label>
                <input
                  type="text"
                  placeholder="مثال: my-awesome-post"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-brand"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  dir="ltr"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs font-bold text-neutral-400 uppercase block mb-1">التصنيف</label>
                <select
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-brand appearance-none"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {categories.map((c: any) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                  {categories.length === 0 && <option value={formData.category}>{formData.category}</option>}
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-100">
            {/* Editor Toolbar */}
            <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center flex-wrap gap-1 sticky top-20 z-10">
              {/* Text formatting */}
              <button onClick={() => editor?.chain().focus().toggleBold().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('bold') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="عريض"><Bold className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleItalic().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('italic') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="مائل"><Italic className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('underline') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="تسطير"><UnderlineIcon className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleStrike().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('strike') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="شطب"><Strikethrough className="w-4 h-4" /></button>
              
              <div className="w-px h-5 bg-neutral-300 mx-1" />
              
              {/* Headings */}
              <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('heading', { level: 1 }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="عنوان رئيسي"><Heading1 className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('heading', { level: 2 }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="عنوان فرعي"><Heading2 className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('heading', { level: 3 }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="عنوان أصغر"><Heading3 className="w-4 h-4" /></button>
              
              <div className="w-px h-5 bg-neutral-300 mx-1" />

              {/* Lists */}
              <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('bulletList') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="قائمة نقطية"><List className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive('orderedList') ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="قائمة رقمية"><ListOrdered className="w-4 h-4" /></button>

              <div className="w-px h-5 bg-neutral-300 mx-1" />

              {/* Alignment */}
              <button onClick={() => editor?.chain().focus().setTextAlign('right').run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive({ textAlign: 'right' }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="محاذاة لليمين"><AlignRight className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().setTextAlign('center').run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive({ textAlign: 'center' }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="توسيط"><AlignCenter className="w-4 h-4" /></button>
              <button onClick={() => editor?.chain().focus().setTextAlign('left').run()} className={`p-1.5 rounded hover:bg-neutral-200 ${editor?.isActive({ textAlign: 'left' }) ? 'bg-neutral-200 text-brand' : 'text-neutral-600'}`} title="محاذاة لليسار"><AlignLeft className="w-4 h-4" /></button>

              <div className="w-px h-5 bg-neutral-300 mx-1" />

              {/* Media */}
              <button onClick={insertEditorImage} className="p-1.5 rounded hover:bg-neutral-200 text-neutral-600 flex items-center gap-1" title="إدراج صورة">
                <ImageIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Editor Content */}
            <div className="p-8 prose-container" dir="rtl">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
