import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Plus, Edit, Trash2, FileText, Mail,
  Check, X, AlertCircle, BookOpen,
  Save, RefreshCw, ExternalLink
} from 'lucide-react';
import type { Resource, ResourceCategory } from '../lib/types';

const CATEGORIES: ResourceCategory[] = [
  'Visa Guides', 'Scholarships', 'Country Guides', 'Applications',
  'IELTS', 'TOEFL', 'GRE', 'SOP Guides', 'LOR Guides',
  'University Selection', 'Budget Planning'
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

type Tab = 'resources' | 'subscribers';

const AdminPanel: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<Tab>('resources');
  const [resources, setResources] = useState<Resource[]>([]);
  const [subscribers, setSubscribers] = useState<{ id: string; email: string; country: string; created_at: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editResource, setEditResource] = useState<Partial<Resource> | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const headers = useCallback(() => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  }), [apiKey]);

  const fetchResources = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/resources', { headers: headers() });
      if (res.status === 401) { setError('Invalid API key'); setAuthenticated(false); return; }
      const data = await res.json();
      setResources(data.data || []);
      setError('');
    } catch {
      setError('Failed to fetch resources');
    } finally {
      setLoading(false);
    }
  }, [headers]);

  const fetchSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/subscribers', { headers: headers() });
      if (res.status === 401) { setError('Invalid API key'); setAuthenticated(false); return; }
      const data = await res.json();
      setSubscribers(data.data || []);
      setError('');
    } catch {
      setError('Failed to fetch subscribers');
    } finally {
      setLoading(false);
    }
  }, [headers]);

  const handleLogin = () => {
    if (apiKey.trim()) {
      setAuthenticated(true);
      fetchResources();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this resource permanently?')) return;
    try {
      const res = await fetch('/api/admin/resources', {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setResources(prev => prev.filter(r => r.id !== id));
        showSuccess('Resource deleted');
      } else {
        const data = await res.json();
        setError(data.error || 'Delete failed');
      }
    } catch {
      setError('Delete failed');
    }
  };

  const handleSave = async (resource: Partial<Resource>) => {
    try {
      const method = resource.id ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/resources', {
        method,
        headers: headers(),
        body: JSON.stringify(resource),
      });
      if (res.ok) {
        const data = await res.json();
        if (method === 'POST') {
          setResources(prev => [data.data, ...prev]);
        } else {
          setResources(prev => prev.map(r => r.id === data.data.id ? data.data : r));
        }
        setShowForm(false);
        setEditResource(null);
        showSuccess(method === 'POST' ? 'Resource created' : 'Resource updated');
      } else {
        const data = await res.json();
        setError(data.error || 'Save failed');
      }
    } catch {
      setError('Save failed');
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setEditResource(prev => ({
          ...prev,
          fileUrl: data.filePath,
          fileSize: data.fileSize,
          fileType: data.fileType,
        }));
        showSuccess('File uploaded');
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch {
      setError('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleThumbnailUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setEditResource(prev => ({
          ...prev,
          thumbnail: data.publicUrl || data.filePath,
        }));
        showSuccess('Thumbnail uploaded');
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch {
      setError('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const showSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center" style={{ paddingTop: '80px' }}>
        <div className="max-w-sm w-full mx-4">
          <div className="bg-white border border-slate-200/70 rounded-3xl p-8 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-xs text-slate-400 mb-6">Enter your admin API key to continue</p>
            <input
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              placeholder="API Key"
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-primary"
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition-colors"
            >
              Authenticate
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A]" style={{ paddingTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <a href="/" className="hover:text-primary">Home</a>
              <span>/</span>
              <span className="text-slate-700 font-semibold">Admin</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Resource Management</h1>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-xs text-slate-400 hover:text-slate-600 font-medium"
          >
            Logout
          </button>
        </div>

        {/* Success/Error messages */}
        {successMessage && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-700">
            <Check className="w-4 h-4" /> {successMessage}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs font-bold text-rose-700">
            <AlertCircle className="w-4 h-4" /> {error}
            <button onClick={() => setError('')} className="ml-auto"><X className="w-3.5 h-3.5" /></button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-slate-100 rounded-2xl p-1 mb-6 max-w-xs">
          <button
            onClick={() => { setTab('resources'); fetchResources(); }}
            className={`flex-1 px-4 py-2 rounded-xl text-xs font-bold transition-all ${tab === 'resources' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}
          >
            Resources
          </button>
          <button
            onClick={() => { setTab('subscribers'); fetchSubscribers(); }}
            className={`flex-1 px-4 py-2 rounded-xl text-xs font-bold transition-all ${tab === 'subscribers' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}
          >
            Subscribers
          </button>
        </div>

        {tab === 'resources' && (
          <>
            {/* Resource list */}
            <div className="bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-slate-800">All Resources ({resources.length})</h2>
                <div className="flex gap-2">
                  <button
                    onClick={fetchResources}
                    className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setEditResource({}); setShowForm(true); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Resource
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 bg-slate-50 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : resources.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-bold text-slate-400">No resources yet</p>
                  <p className="text-xs text-slate-400 mt-1">Click "Add Resource" to create one</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                        <th className="pb-3 pr-3">Title</th>
                        <th className="pb-3 pr-3">Category</th>
                        <th className="pb-3 pr-3">Country</th>
                        <th className="pb-3 pr-3">Downloads</th>
                        <th className="pb-3 pr-3">Featured</th>
                        <th className="pb-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {resources.map(r => (
                        <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3 pr-3 font-bold text-slate-800 max-w-[200px] truncate">{r.title}</td>
                          <td className="py-3 pr-3 text-primary">{r.category}</td>
                          <td className="py-3 pr-3 text-slate-500">{r.country}</td>
                          <td className="py-3 pr-3 text-slate-500">{r.download_count}</td>
                          <td className="py-3 pr-3">{r.featured ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <X className="w-3.5 h-3.5 text-slate-300" />}</td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <a
                                href={`/resources/${r.slug}`}
                                target="_blank"
                                className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                              <button
                                onClick={() => { setEditResource(r); setShowForm(true); }}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(r.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Add/Edit Resource Form */}
            {showForm && (
              <ResourceForm
                resource={editResource || {}}
                onSave={handleSave}
                onCancel={() => { setShowForm(false); setEditResource(null); }}
                onUpload={handleFileUpload}
                onThumbnailUpload={handleThumbnailUpload}
                uploading={uploading}
              />
            )}
          </>
        )}

        {tab === 'subscribers' && (
          <div className="bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-800 mb-4">Newsletter Subscribers ({subscribers.length})</h2>
            {loading ? (
              <div className="space-y-3">
                {[1,2,3].map(i => <div key={i} className="h-10 bg-slate-50 rounded-xl animate-pulse" />)}
              </div>
            ) : subscribers.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-slate-400">No subscribers yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                      <th className="pb-3 pr-3">Email</th>
                      <th className="pb-3 pr-3">Country</th>
                      <th className="pb-3">Subscribed At</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {subscribers.map(s => (
                      <tr key={s.id} className="hover:bg-slate-50/50">
                        <td className="py-3 pr-3 font-bold text-slate-800">{s.email}</td>
                        <td className="py-3 pr-3 text-slate-500">{s.country || '-'}</td>
                        <td className="py-3 text-slate-400">{new Date(s.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Resource Form Sub-component ─── */
interface ResourceFormProps {
  resource: Partial<Resource>;
  onSave: (r: Partial<Resource>) => void;
  onCancel: () => void;
  onUpload: (file: File) => void;
  onThumbnailUpload: (file: File) => void;
  uploading: boolean;
}

const ResourceForm: React.FC<ResourceFormProps> = ({ resource, onSave, onCancel, onUpload, onThumbnailUpload, uploading }) => {
  const [form, setForm] = useState({
    id: resource.id || '',
    title: resource.title || '',
    slug: resource.slug || '',
    description: resource.description || '',
    category: resource.category || 'Visa Guides',
    country: resource.country || 'All',
    level: resource.level || 'Beginner',
    thumbnail: resource.thumbnail || '',
    readTime: resource.readTime || '',
    featured: resource.featured || false,
  });

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!form.title || !form.slug) return;
    onSave({
      ...form,
      id: form.id || undefined,
      fileUrl: resource.fileUrl,
      fileSize: resource.fileSize,
      fileType: resource.fileType,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-800">{resource.id ? 'Edit Resource' : 'Add Resource'}</h2>
        <button onClick={onCancel} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => {
                const title = e.target.value;
                setForm(f => ({
                  ...f,
                  title,
                  slug: resource.id ? f.slug : generateSlug(title),
                }));
              }}
              required
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Slug *</label>
            <input
              type="text"
              value={form.slug}
              onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
              required
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Category *</label>
            <select
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value as ResourceCategory }))}
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Country</label>
            <input
              type="text"
              value={form.country}
              onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Level</label>
            <select
              value={form.level}
              onChange={e => setForm(f => ({ ...f, level: e.target.value as any }))}
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none"
            >
              {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Read Time</label>
            <input
              type="text"
              value={form.readTime}
              onChange={e => setForm(f => ({ ...f, readTime: e.target.value }))}
              placeholder="e.g. 15 min"
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            rows={3}
            className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* File upload */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">File</label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept=".pdf,.docx,.xlsx,.zip"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) onUpload(file);
              }}
              className="text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
            {uploading && <span className="text-xs text-slate-400 animate-pulse">Uploading...</span>}
            {resource.fileUrl && (
              <span className="text-[10px] text-emerald-600 font-medium">File attached</span>
            )}
          </div>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Thumbnail Image</label>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              value={form.thumbnail}
              onChange={e => setForm(f => ({ ...f, thumbnail: e.target.value }))}
              placeholder="Paste image URL or upload below"
              className="flex-1 min-w-[200px] text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
            />
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) onThumbnailUpload(file);
              }}
              className="text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
            {uploading && <span className="text-xs text-slate-400 animate-pulse">Uploading...</span>}
          </div>
          {form.thumbnail && (
            <div className="mt-2 relative inline-block">
              <img
                src={form.thumbnail}
                alt="Thumbnail preview"
                className="h-20 w-32 object-cover rounded-xl border border-slate-200"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            checked={form.featured}
            onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
            className="rounded border-slate-300"
          />
          <label htmlFor="featured" className="text-xs font-medium text-slate-600">Featured resource</label>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            {resource.id ? 'Update Resource' : 'Create Resource'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminPanel;
