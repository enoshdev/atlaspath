export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ResourceCategory;
  country: string;
  level: StudyLevel;
  thumbnail: string | null;
  fileUrl: string | null;
  fileSize: number | null;
  fileType: string | null;
  readTime: string | null;
  download_count: number;
  save_count: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export type ResourceCategory =
  | 'Visa Guides'
  | 'Scholarships'
  | 'Country Guides'
  | 'Applications'
  | 'IELTS'
  | 'TOEFL'
  | 'GRE'
  | 'SOP Guides'
  | 'LOR Guides'
  | 'University Selection'
  | 'Budget Planning';

export type StudyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SavedResource {
  id: string;
  user_id: string;
  resource_id: string;
  saved_at: string;
}

export interface DownloadAnalytics {
  id: string;
  user_id: string;
  resource_id: string;
  downloaded_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  country: string;
  created_at: string;
}

export interface ResourceFilters {
  category?: string;
  country?: string;
  level?: string;
  search?: string;
  limit?: number;
  offset?: number;
}
