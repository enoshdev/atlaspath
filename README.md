# AtlasPath — Global Education Planner

A production-ready study-abroad guidance platform built with **Astro v7** (SSR), **React 19**, **Supabase**, and **Tailwind CSS v4**.

## Features

- **University Explorer** — Browse 500+ universities across 8 countries
- **Country Guides** — Detailed country profiles with tuition, visa, and scholarship info
- **Scholarship Finder** — Search and compare 5000+ global scholarships
- **Resource Library** — Download guides (visa, SOP, IELTS, GRE) with Supabase storage
- **Interactive Assessment** — AI-powered readiness evaluation
- **Consultation Booking** — 5-step scheduling flow with expert matching
- **Success Stories** — Real student testimonials

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro v7 (Node standalone SSR) |
| UI | React 19 + Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Auth | Supabase Anon Key (public) |

## Getting Started

### Prerequisites

- Node.js >= 22.12.0
- A Supabase project (free tier works)

### Setup

```bash
# Clone the repository
git clone https://github.com/enoshdev/atlaspath.git
cd atlaspath

# Install dependencies
npm install

# Configure environment
cp .env.example .env
```

Edit `.env` with your Supabase credentials:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_API_KEY=your-secure-admin-api-key
```

### Database Setup

Run the SQL in `src/lib/db-schema.sql` in your Supabase SQL Editor to create all tables, indexes, RLS policies, and the increment function.

### Seed Data (Optional)

```bash
node scripts/seed.mjs
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     — React interactive components
  layouts/        — Astro layout wrapper
  lib/            — Supabase client, types, DB schema
  pages/          — Routes (Astro pages + API endpoints)
  styles/         — Tailwind CSS v4 configuration
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/resources` | List/filter resources |
| GET | `/api/resources/:slug` | Single resource |
| POST | `/api/resources/save` | Save a resource |
| DELETE | `/api/resources/save` | Unsave a resource |
| POST | `/api/resources/download` | Download with signed URL |
| POST | `/api/newsletter` | Subscribe to newsletter |
| GET | `/api/popular-downloads` | Top 5 downloads |

Admin routes are authenticated via Bearer token.

## Deployment

### Vercel / Netlify / Railway

This project uses `@astrojs/node` with `standalone` mode. Deploy as a Node.js server:

1. Set build command: `npm run build`
2. Set output directory: `dist/`
3. Configure environment variables in your hosting dashboard
4. Start command: `node dist/server/entry.mjs`

## Security

- No secrets in source code
- Service role key used only in server-side API routes
- Public anon key is safe for client-side usage (RLS enforced)
- Admin routes protected by Bearer token

## License

MIT
