import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface BlogPost {
     slug: string;
     title: string;
     date: string;
     excerpt: string;
     content: string;
     coverImage: string;
     author: string;
}

export interface CaseStudy {
     slug: string;
     title: string;
     client: string;
     summary: string;
     results: string[];
}

// Simulated Headless CMS function
export async function getBlogPosts(): Promise<BlogPost[]> {
     try {
          const filePath = path.join(CONTENT_DIR, 'blog.json');
          if (!fs.existsSync(filePath)) return [];

          const fileContent = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(fileContent);
     } catch (error) {
          console.error('Error reading blog posts from CMS:', error);
          return [];
     }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
     const posts = await getBlogPosts();
     return posts.find(p => p.slug === slug) || null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
     try {
          const filePath = path.join(CONTENT_DIR, 'case-studies.json');
          if (!fs.existsSync(filePath)) return [];

          const fileContent = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(fileContent);
     } catch (error) {
          console.error('Error reading case studies from CMS:', error);
          return [];
     }
}
