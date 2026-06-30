import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabaseUrl = 'https://homjtraxebbwhqbppyhx.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbWp0cmF4ZWJid2hxYnBweWh4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MjgxMjAwMCwiZXhwIjoyMDk4Mzg4MDAwfQ.N-Qin8VJ_KpznK1TzvX44DSyVDE5izfbThwt8sfpaQY';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

function makePdfBytes(title) {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 44 >>
stream
BT /F1 24 Tf 100 700 Td (${title}) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000353 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
416
%%EOF`;
  return new TextEncoder().encode(content);
}

const resources = [
  {
    title: 'Complete USA Student Visa Guide',
    slug: 'usa-student-visa-guide',
    description: 'Step-by-step guide to the F-1 student visa application process, including DS-160 form, SEVIS fee, visa interview tips, and required documentation for studying in the United States.',
    category: 'Visa Guides',
    country: 'USA',
    level: 'Beginner',
    read_time: '15 min',
    featured: true,
  },
  {
    title: 'UK Tier 4 Visa Application',
    slug: 'uk-tier-4-visa-application',
    description: 'Everything you need to know about the UK Tier 4 (General) student visa. Covers CAS, financial requirements, tuberculosis test, and biometrics appointment.',
    category: 'Visa Guides',
    country: 'UK',
    level: 'Intermediate',
    read_time: '12 min',
    featured: false,
  },
  {
    title: 'Canada Study Permit Guide',
    slug: 'canada-study-permit-guide',
    description: 'Complete guide to obtaining a Canadian study permit. Includes SDS stream information, GIC requirements, and post-graduation work permit options.',
    category: 'Visa Guides',
    country: 'Canada',
    level: 'Beginner',
    read_time: '10 min',
    featured: true,
  },
  {
    title: 'Top MBA Scholarships Worldwide',
    slug: 'top-mba-scholarships-worldwide',
    description: 'A curated list of fully-funded MBA scholarships for international students. Includes Fulbright, Chevening, Erasmus Mundus, and university-specific awards.',
    category: 'Scholarships',
    country: 'All',
    level: 'Advanced',
    read_time: '20 min',
    featured: true,
  },
  {
    title: 'Australia Scholarships Guide',
    slug: 'australia-scholarships-guide',
    description: 'Guide to Australian scholarships including Australia Awards, Destination Australia, and university-specific scholarships for international students.',
    category: 'Scholarships',
    country: 'Australia',
    level: 'Beginner',
    read_time: '8 min',
    featured: false,
  },
  {
    title: 'Study in Germany: Complete Guide',
    slug: 'study-in-germany-guide',
    description: 'Everything about studying in Germany from student visa to blocked account. Covers DAAD scholarships, public universities, and the German education system.',
    category: 'Country Guides',
    country: 'Germany',
    level: 'Beginner',
    read_time: '18 min',
    featured: true,
  },
  {
    title: 'UK vs USA University Applications',
    slug: 'uk-vs-usa-university-applications',
    description: 'Compare the application systems of UK (UCAS) and USA (Common App). Understand personal statements, recommendation letters, and application timelines.',
    category: 'Applications',
    country: 'All',
    level: 'Intermediate',
    read_time: '14 min',
    featured: false,
  },
  {
    title: 'IELTS Band 7+ Strategy Guide',
    slug: 'ielts-band-7-strategy-guide',
    description: 'Proven strategies for scoring Band 7 and above in IELTS. Covers all four sections with practice techniques, time management, and sample answers.',
    category: 'IELTS',
    country: 'All',
    level: 'Intermediate',
    read_time: '25 min',
    featured: true,
  },
  {
    title: 'IELTS Speaking Cue Cards',
    slug: 'ielts-speaking-cue-cards',
    description: '50+ IELTS speaking cue cards with sample answers. Topics include education, technology, environment, and daily life. Perfect for Part 2 practice.',
    category: 'IELTS',
    country: 'All',
    level: 'Beginner',
    read_time: '30 min',
    featured: false,
  },
  {
    title: 'TOEFL iBT Complete Preparation',
    slug: 'toefl-ibt-complete-preparation',
    description: 'Comprehensive TOEFL iBT preparation covering reading, listening, speaking, and writing sections. Includes practice tests and scoring strategies.',
    category: 'TOEFL',
    country: 'All',
    level: 'Intermediate',
    read_time: '20 min',
    featured: false,
  },
  {
    title: 'GRE 330+ Study Plan',
    slug: 'gre-330-study-plan',
    description: 'A 3-month study plan to achieve a GRE score of 330+. Includes verbal reasoning, quantitative reasoning, and analytical writing strategies.',
    category: 'GRE',
    country: 'All',
    level: 'Advanced',
    read_time: '15 min',
    featured: true,
  },
  {
    title: 'GRE Vocabulary Flashcards',
    slug: 'gre-vocabulary-flashcards',
    description: '500 essential GRE vocabulary words with definitions, synonyms, and example sentences. Perfect for building your verbal reasoning foundation.',
    category: 'GRE',
    country: 'All',
    level: 'Beginner',
    read_time: '45 min',
    featured: false,
  },
  {
    title: 'SOP Writing Masterclass',
    slug: 'sop-writing-masterclass',
    description: 'Learn how to write a compelling Statement of Purpose. Includes templates, sample essays, common mistakes, and tips from admission officers.',
    category: 'SOP Guides',
    country: 'All',
    level: 'Intermediate',
    read_time: '22 min',
    featured: true,
  },
  {
    title: 'LOR Request Guide',
    slug: 'lor-request-guide',
    description: 'How to request strong Letters of Recommendation from professors and employers. Includes sample request emails, recommender guides, and timeline planning.',
    category: 'LOR Guides',
    country: 'All',
    level: 'Beginner',
    read_time: '10 min',
    featured: false,
  },
  {
    title: 'University Selection Strategy',
    slug: 'university-selection-strategy',
    description: 'A data-driven approach to selecting the right universities. Covers safety/match/reach schools, rankings analysis, and ROI considerations.',
    category: 'University Selection',
    country: 'All',
    level: 'Advanced',
    read_time: '18 min',
    featured: false,
  },
  {
    title: 'Study Abroad Budget Planner',
    slug: 'study-abroad-budget-planner',
    description: 'Detailed budget planning template for studying abroad. Includes tuition, living expenses, health insurance, travel, and emergency fund calculations.',
    category: 'Budget Planning',
    country: 'All',
    level: 'Beginner',
    read_time: '12 min',
    featured: true,
  },
  {
    title: 'Australia Student Visa (Subclass 500)',
    slug: 'australia-student-visa-500',
    description: 'Complete guide to the Australian Subclass 500 student visa. Covers GTE requirement, OSHC health insurance, financial evidence, and work rights.',
    category: 'Visa Guides',
    country: 'Australia',
    level: 'Intermediate',
    read_time: '14 min',
    featured: false,
  },
];

async function main() {
  console.log('Seeding resources...\n');

  const tmpDir = join(__dirname, '..', 'tmp_seed_files');
  if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });

  let inserted = 0;

  for (const res of resources) {
    try {
      const fileName = `${res.slug}.pdf`;
      const filePath = `resources/${Date.now()}_${fileName}`;

      const pdfBytes = makePdfBytes(res.title);
      const pdfName = `tmp_${fileName}`;
      const pdfLocalPath = join(tmpDir, pdfName);
      writeFileSync(pdfLocalPath, pdfBytes);

      const fileBuffer = readFileSync(pdfLocalPath);

      const { error: uploadError } = await supabase.storage
        .from('resource-files')
        .upload(filePath, fileBuffer, {
          contentType: 'application/pdf',
          upsert: true,
        });

      if (uploadError) {
        console.error(`  Upload failed for "${res.title}": ${uploadError.message}`);
        continue;
      }

      const fileSize = fileBuffer.length;

      const { error: dbError } = await supabase
        .from('resources')
        .insert({
          title: res.title,
          slug: res.slug,
          description: res.description,
          category: res.category,
          country: res.country,
          level: res.level,
          read_time: res.read_time,
          featured: res.featured,
          file_url: filePath,
          file_size: fileSize,
          file_type: 'pdf',
          download_count: Math.floor(Math.random() * 500) + 10,
          save_count: Math.floor(Math.random() * 100) + 5,
        })
        .select('id')
        .single();

      if (dbError) {
        console.error(`  DB insert failed for "${res.title}": ${dbError.message}`);
        continue;
      }

      console.log(`  ✓ ${res.title} (${res.category}, ${res.country})`);
      inserted++;
    } catch (err) {
      console.error(`  Error with "${res.title}": ${err.message}`);
    }
  }

  // Cleanup temp files
  if (existsSync(tmpDir)) {
    const { rmSync } = await import('fs');
    rmSync(tmpDir, { recursive: true, force: true });
  }

  console.log(`\nDone! Inserted ${inserted} out of ${resources.length} resources.`);
}

main().catch(console.error);
