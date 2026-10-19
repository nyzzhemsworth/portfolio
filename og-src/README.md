# OG Images — sumber Open Graph preview per halaman

Preview yang muncul saat link ziellvfx.com di-share (WhatsApp, Telegram,
Discord, Twitter/X, Facebook) titip di fungsi **og:image** dari file PNG
statik. PNG-nya di commit di `src/public/og-{home,links,contact}.png`.

Sumber SVG ada di folder ini (1200×630), ikut warna/tema web:
`#dceeff` sky wash, border hitam 2.5-3px, kartu putih hard-shadow, sticker
rounded-full warna accent (electric blue `#4da2ff`, mint `#55db9c`,
ember `#fb4903`, sunburst `#ffd731`).

## Meta per halaman
Meta OG & title per route TIDAK ditulis manual di index.html per file —
dikeluarkan otomatis saat build oleh `scripts/gen-page-html.mjs`
(dipanggil `autopush.sh`): bikin `dist/links.html` & `dist/contact.html`
dari `dist/index.html` dengan title/description/og:image tiap route.

## Cara regenerate PNG (misal desain diganti)
```bash
# 1. Font sebagai user sistem (sekali saja):
mkdir -p /usr/local/share/fonts/ziell
curl -fsSL "https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf" \
  -o /usr/local/share/fonts/ziell/Anton-Regular.ttf
curl -fsSL "https://cdn.jsdelivr.net/fontsource/fonts/syne@latest/latin-800-normal.ttf" \
  -o /usr/local/share/fonts/ziell/Syne-800.ttf
curl -fsSL "https://cdn.jsdelivr.net/fontsource/fonts/syne@latest/latin-700-normal.ttf" \
  -o /usr/local/share/fonts/ziell/Syne-700.ttf
curl -fsSL "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-700-normal.ttf" \
  -o /usr/local/share/fonts/ziell/Jakarta-700.ttf
curl -fsSL "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-800-normal.ttf" \
  -o /usr/local/share/fonts/ziell/Jakarta-800.ttf
apt-get install -y librsvg2-bin fontconfig && fc-cache -f

# 2. Render (dari folder og-src):
rsvg-convert -w 1200 -h 630 og-home.svg   -o ../public/og-home.png
rsvg-convert -w 1200 -h 630 og-links.svg  -o ../public/og-links.png
rsvg-convert -w 1200 -h 630 og-contact.svg -o ../public/og-contact.png
```
Sesi selingan: avatar ambil dari `../public/pswsbhar.jpg`.
