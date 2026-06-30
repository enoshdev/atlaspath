import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Download, Bookmark, BookmarkCheck, Clock, Globe, FileText,
  ArrowLeft, ArrowRight, Award, BarChart3
} from 'lucide-react';
import type { Resource } from '../lib/types';

interface Props {
  resource: Resource;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Visa Guides': FileText,
  'Scholarships': Award,
  'Country Guides': Globe,
  'Applications': FileText,
  'IELTS': FileText,
  'TOEFL': FileText,
  'GRE': FileText,
  'SOP Guides': FileText,
  'LOR Guides': FileText,
  'University Selection': Award,
  'Budget Planning': BarChart3,
};

const getVisitorId = (): string => {
  let id = localStorage.getItem('visitor_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('visitor_id', id);
  }
  return id;
};

const ResourceDetail: React.FC<Props> = ({ resource }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

  const userId = getVisitorId();

  useEffect(() => {
    fetch(`/api/resources/save?userId=${userId}`)
      .then(r => r.json())
      .then(data => {
        if (data.data?.includes(resource.id)) {
          setIsSaved(true);
        }
      })
      .catch(() => {});
  }, [resource.id, userId]);

  useEffect(() => {
    setLoadingRelated(true);
    fetch(`/api/related-resources?slug=${resource.slug}&limit=4`)
      .then(r => r.json())
      .then(data => setRelatedResources(data.data || []))
      .catch(() => {})
      .finally(() => setLoadingRelated(false));
  }, [resource.slug]);

  const handleSave = useCallback(async () => {
    if (isSaved) {
      const res = await fetch('/api/resources/save', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resourceId: resource.id }),
      });
      if (res.ok) setIsSaved(false);
    } else {
      const res = await fetch('/api/resources/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resourceId: resource.id }),
      });
      if (res.ok) setIsSaved(true);
    }
  }, [isSaved, resource.id, userId]);

  const handleDownload = useCallback(async () => {
    if (isDownloading || !resource.fileUrl) return;
    setIsDownloading(true);
    try {
      const res = await fetch('/api/resources/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resourceId: resource.id }),
      });
      const data = await res.json();
      if (data.downloadUrl) {
        const a = document.createElement('a');
        a.href = data.downloadUrl;
        a.download = data.fileName || resource.title;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert(data.error || 'Download failed');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading, resource, userId]);

  const CatIcon = CATEGORY_ICONS[resource.category] || FileText;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A]" style={{ paddingTop: '80px' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
          <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
          <span>/</span>
          <a href="/resources" className="hover:text-primary transition-colors font-medium">Resources</a>
          <span>/</span>
          <span className="text-[#0F172A] font-semibold truncate max-w-[200px]">{resource.title}</span>
        </div>

        {/* Back link */}
        <a
          href="/resources"
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Resources
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="bg-white border border-slate-200/70 rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                <CatIcon className="w-3 h-3" />
                {resource.category}
              </span>
              {resource.country && resource.country !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-[10px] font-bold text-sky-600">
                  <Globe className="w-3 h-3" />
                  {resource.country}
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-bold text-amber-600">
                <Clock className="w-3 h-3" />
                {resource.readTime || 'N/A'}
              </span>
              {resource.level && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
                  <BarChart3 className="w-3 h-3" />
                  {resource.level}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              {resource.title}
            </h1>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {resource.description}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span className="font-medium">{resource.download_count} downloads</span>
              </div>
              {resource.fileSize && (
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="font-medium">{formatFileSize(resource.fileSize)}</span>
                </div>
              )}
              {resource.fileType && (
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="font-medium uppercase">{resource.fileType}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {resource.fileUrl && (
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-primary hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                  <Download className="w-4 h-4" />
                  {isDownloading ? 'Preparing Download...' : 'Download Resource'}
                </button>
              )}
              <button
                onClick={handleSave}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                  isSaved
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-primary/30'
                }`}
              >
                {isSaved ? (
                  <><BookmarkCheck className="w-4 h-4" /> Saved</>
                ) : (
                  <><Bookmark className="w-4 h-4" /> Save Resource</>
                )}
              </button>
            </div>
          </div>

          {/* File preview placeholder */}
          {!resource.fileUrl && (
            <div className="bg-white border border-slate-200/70 rounded-3xl p-8 shadow-sm mb-6 text-center">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-400">No file attached to this resource</p>
              <p className="text-xs text-slate-400 mt-1">Contact the team for more information</p>
            </div>
          )}

          {/* Related Resources */}
          <div className="mt-10">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4">Related Resources</h2>
            {loadingRelated ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white border border-slate-200/70 rounded-2xl p-4 animate-pulse">
                    <div className="h-4 bg-slate-100 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-slate-100 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : relatedResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedResources.map((rel) => (
                  <a
                    key={rel.id}
                    href={`/resources/${rel.slug}`}
                    className="bg-white border border-slate-200/70 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-1">
                          {rel.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium mt-1 line-clamp-2">
                          {rel.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[9px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                            {rel.category}
                          </span>
                          <span className="text-[9px] text-slate-400 flex items-center gap-1">
                            <Download className="w-2.5 h-2.5" />
                            {rel.download_count}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">No related resources found.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export default ResourceDetail;
