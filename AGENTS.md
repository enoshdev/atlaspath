Always use:
- astro, tailwind-4-docs, web-design-guidelines these three skills for the project.

## Project Status

**This is a live project converted from static SSG to SSR (Node standalone).** The Resources page is fully backend-driven via Supabase. All other pages remain static-compatible.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

- **Astro v7** with `@astrojs/node` (standalone SSR mode)
- **Supabase** for database (PostgreSQL), file storage, and REST API
- **React 19** interactive components loaded via `client:load` / `client:visible`
- **Tailwind CSS v4** with `@theme` in `global.css`
- **Framer Motion** for animations
- **Lucide React** icons

## Environment Variables

Required in `.env` (copy from `.env.example`):

- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_ANON_KEY` — Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (admin only)
- `ADMIN_API_KEY` — Secret key for admin panel authentication

## Resources System (Backend-Driven)

### Database Tables (Supabase)

1. **resources** — Main resource catalog (title, slug, description, category, country, level, thumbnail, file_url, file_size, file_type, read_time, download_count, save_count, featured, created_at, updated_at)
2. **saved_resources** — User saves (user_id, resource_id, saved_at) with unique constraint
3. **download_analytics** — Download tracking (user_id, resource_id, downloaded_at)
4. **newsletter_subscribers** — Email subscriptions (email unique, country, created_at)

### Storage Bucket

- Bucket name: `resource-files`
- Public access: yes
- Allowed types: PDF, DOCX, XLSX, ZIP
- Max file size: 50MB

### API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/resources` | List/filter resources (query: category, country, level, search, limit, offset) |
| GET | `/api/resources/:slug` | Get single resource by slug |
| POST | `/api/resources/save` | Save a resource (body: userId, resourceId) |
| DELETE | `/api/resources/save` | Unsave a resource (body: userId, resourceId) |
| GET | `/api/resources/save` | Get user's saved resource IDs (query: userId) |
| POST | `/api/resources/download` | Track download + return signed URL (body: userId, resourceId) |
| POST | `/api/newsletter` | Subscribe email (body: email, country) |
| GET | `/api/newsletter` | List subscribers (query: limit, offset) |
| GET | `/api/popular-downloads` | Top 5 resources by download_count |
| GET | `/api/related-resources` | Related resources by category/country (query: slug, limit) |
| GET | `/api/admin/resources` | Admin list resources (Auth: Bearer ADMIN_API_KEY) |
| POST | `/api/admin/resources` | Admin create resource |
| PUT | `/api/admin/resources` | Admin update resource |
| DELETE | `/api/admin/resources` | Admin delete resource |
| POST | `/api/admin/upload` | Admin file upload to Supabase Storage |
| GET | `/api/admin/subscribers` | Admin list subscribers (Auth: Bearer ADMIN_API_KEY) |

### Admin Panel

- Route: `/admin`
- Login via API key
- Tabs: Resources (CRUD table), Subscribers (list)
- Resource form with file upload, slug auto-generation, featured toggle
- Delete confirmation, success/error toasts

### Database Schema

Located at: `src/lib/db-schema.sql` — run in Supabase SQL Editor.

Includes:
- All 4 tables with constraints and indexes
- Auto-update `updated_at` trigger
- RLS policies (public read for resources, user-based for saves)
- `increment(x)` PostgreSQL function

## ResourcesHub Component (Public)

- All resource data fetched live from `/api/resources` with query params
- Filters: category (11 options), country, level, search
- Loading states: skeleton rows in table, pulse cards for featured/popular
- Empty state: illustration + "No resources found" + Reset Filters button
- Error state: alert banner + retry button
- Save/unsave with Bookmark/BookmarkCheck icons, persisted via API
- Download: real file download via signed URL from Supabase Storage
- Newsletter: validated email, duplicate checking, success/error feedback
- Popular downloads: top 5 from API, shown in sidebar + trending section
- Featured guides: fetched with `featured=true`, horizontal slider
- Category cards: 11 categories filter the resource table on click
- Country Knowledge Center: static reference data (visa process, tuition, etc.)
- Tools grid: static links
- Quick FAQ: static content
- Visitor ID: generated UUID stored in localStorage for anonymous user tracking

## Resource Detail Page

- Route: `/resources/[slug]`
- Dynamic SSR page fetching resource by slug from Supabase
- Shows: title, description, category, country, level, read time, file size/type, download count
- Download button: triggers POST to `/api/resources/download`, opens signed URL
- Save button: toggle via API
- Related resources: fetched from `/api/related-resources`
- Breadcrumb: Home > Resources > [Resource Title]
- Skeleton loading for related resources

## Frontend-only Pages

These pages remain static and do NOT use the backend:
- `/` (Home)
- `/universities`
- `/countries`, `/countries/[country]`
- `/assessment`
- `/scholarships`
- `/success-stories`
- `/team`
- `/book-consultation`
