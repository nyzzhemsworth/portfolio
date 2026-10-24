# OG Images — sumber Open Graph preview per halaman

Preview yang muncul saat link ziellvfx.com di-share (WhatsApp, Telegram,
Discord, Twitter/X, Facebook) titip di fungsi **og:image** dari file PNG
statik. PNG-nya di commit di `src/public/og-*.png`.

Sumber SVG ada di folder ini (1200×630), ikut warna/tema web:
`#dceeff` sky wash, border hitam 2.5-3.5px, kartu putih hard-shadow (8px-10px),
sticker rounded-full warna accent (electric blue `#4da2ff`, mint `#55db9c`,
ember `#fb4903`, sunburst `#ffd731`).

Daftar Preview:
- `og-home.svg` -> `public/og-home.png` (Homepage /)
- `og-links.svg` -> `public/og-links.png` (Link Hub /links)
- `og-contact.svg` -> `public/og-contact.png` (Contact Person /contact)
- `og-tools.svg` -> `public/og-tools.png` (Tools & Projects /tools)
- `og-alightmotion.svg` -> `public/og-alightmotion.png` (Alight Motion /tools/alightmotion)
- `og-method.svg` -> `public/og-method.png` (Compress Method /tools/method)

## Cara regenerate PNG (misal desain diganti)
```bash
# Dari folder src/og-src:
rsvg-convert -w 1200 -h 630 og-home.svg -o ../public/og-home.png
rsvg-convert -w 1200 -h 630 og-links.svg -o ../public/og-links.png
rsvg-convert -w 1200 -h 630 og-contact.svg -o ../public/og-contact.png
rsvg-convert -w 1200 -h 630 og-tools.svg -o ../public/og-tools.png
rsvg-convert -w 1200 -h 630 og-alightmotion.svg -o ../public/og-alightmotion.png
rsvg-convert -w 1200 -h 630 og-method.svg -o ../public/og-method.png
```
Avatar profil diambil dari `pswsbhar.jpg`.
