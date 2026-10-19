#!/usr/bin/env node
/**
 * Generator HTML varian OG (Open Graph) — ZIELLL portfolio.
 *
 * Dipanggil otomatis oleh autopush.sh SETELAH `npm run build`:
 *   node scripts/gen-page-html.mjs
 *
 * Logika: baca dist/index.html (hasil build, asset hash selalu baru),
 * lalu tulis dist/links.html & dist/contact.html dengan title/description/
 * og:image yang beda per halaman. Jadi crawler (WhatsApp, Discord, Twitter,
 * Facebook) dapat preview OG yang sesuai temanya per URL, sementara user
 * tetap dapat SPA yang sama.
 *
 * Sumber OG image: og-src/*.svg (dirender manual ke public/og-*.png).
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');

const SITE = 'https://ziellvfx.com';

// Meta per halaman. `file: 'index.html'` = halaman utama (langsung dipakai).
const routes = [
  {
    file: 'index.html',
    path: '/',
    title: 'ZIELL — Links & Contact',
    description:
      'ZIELL — multi-disciplinary creator. Video editing, web dev, bot & automation. All links & socials in one place.',
    image: '/og-home.png',
    imageAlt: 'ZIELL — profile card with role stickers and ziellvfx.com',
  },
  {
    file: 'links.html',
    path: '/links',
    title: 'ZIELL — Link Hub',
    description:
      'All my official links — WhatsApp Channel, Telegram, Discord Server, TikTok, Instagram & GitHub.',
    image: '/og-links.png',
    imageAlt: 'Link hub cards: WhatsApp, Telegram, Discord',
  },
  {
    file: 'contact.html',
    path: '/contact',
    title: "ZIELL — Let's Connect",
    description:
      'Contact ZIELL directly — WhatsApp direct message & email hello@ziellvfx.com. Fast reply.',
    image: '/og-contact.png',
    imageAlt: 'Contact cards: WhatsApp direct and email',
  },
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Ganti isi atribut content pada meta berdasarkan property/name. */
function setMeta(html, kind, value, newContent) {
  const re = new RegExp(
    `(\\s+(?:${kind}))\\s*=\\s*"${esc(value)}"\\s+content\\s*=\\s*"[^"]*"`,
    'i',
  );
  if (!re.test(html)) {
    console.warn(`  [warn] meta ${kind}="${value}" tidak ditemukan`);
    return html;
  }
  return html.replace(re, (_m, attr) => `${attr}="${newContent}"`);
}

/** Ganti isi <title> ... </title> */
function setTitle(html, newTitle) {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${newTitle}</title>`);
}

function applyRoute(html, route) {
  let out = html;
  out = setTitle(out, route.title);
  out = setMeta(out, 'name', 'description', route.description);
  for (const [kind, value, content] of [
    ['property', 'og:url', `${SITE}${route.path}`],
    ['property', 'og:title', route.title],
    ['property', 'og:description', route.description],
    ['property', 'og:image', `${SITE}${route.image}`],
    ['property', 'og:image:alt', route.imageAlt],
    ['name', 'twitter:title', route.title],
    ['name', 'twitter:description', route.description],
    ['name', 'twitter:image', `${SITE}${route.image}`],
    ['rel', 'canonical', `${SITE}${route.path}`],
  ]) {
    out = setMeta(out, kind, value, content);
  }
  return out;
}

const base = path.join(DIST, 'index.html');
if (!fs.existsSync(base)) {
  console.error(`ERROR: ${base} tidak ada — jalankan dulu "npm run build"`);
  process.exit(1);
}
const html = fs.readFileSync(base, 'utf8');

for (const route of routes) {
  if (route.file === 'index.html') continue; // index.html sudah berisi OG home
  const outPath = path.join(DIST, route.file);
  fs.writeFileSync(outPath, applyRoute(html, route), 'utf8');
  console.log(`OK  ${route.file}  (${route.path} → ${route.image})`);
}
console.log('OG page HTML selesai.');
