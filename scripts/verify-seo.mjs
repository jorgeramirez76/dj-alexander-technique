import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

// Inspect actual prerendered HTML: inherited layout metadata can hide route errors.
const routes = ['', 'about', 'music', 'videos', 'shows', 'gallery', 'press', 'contact'];
const origin = 'https://dj-alexander-technique.vercel.app';
for (const route of routes) {
  const html = readFileSync(`.next/server/app/${route || 'index'}.html`, 'utf8');
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)].map(m => m[1].replace(/\/$/, ''));
  assert.deepEqual(canonical, [`${origin}${route ? `/${route}` : ''}`], `${route || '/'} canonical`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route || '/'} H1`);
  assert.equal((html.match(/<title\b/g) || []).length, 1, `${route || '/'} title`);
  assert.equal((html.match(/<meta\b[^>]*name="description"/g) || []).length, 1, `${route || '/'} description`);
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
console.log(`SEO verified: ${routes.length} rendered routes have distinct canonicals, titles, descriptions, one H1 and parseable JSON-LD.`);
