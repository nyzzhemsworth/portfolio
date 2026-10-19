import { useEffect } from 'react';

// Peta path -> section + judul halaman.
// Tambah entri di sini kalau nanti ada section/halaman baru.
export const ROUTES = {
  '/': { section: 'hero', title: 'ZIELL — Links & Contact' },
  '/links': { section: 'links', title: 'ZIELL — Links' },
  '/contact': { section: 'contact', title: 'ZIELL — Contact' },
};

const normalize = (path) => {
  const clean = path.replace(/\/+$/, '') || '/';
  return ROUTES[clean] ? clean : '/';
};

const scrollToSection = (id, smooth = true) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
};

export function navigate(path) {
  const target = normalize(path);

  if (window.location.pathname !== target) {
    window.history.pushState({ path: target }, '', target);
  }

  document.title = ROUTES[target].title;
  scrollToSection(ROUTES[target].section);
}

export function usePathRouting() {
  useEffect(() => {
    // Biar browser nggak restore posisi scroll lama saat buka deep link.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Dukung URL lama (#links) -> redirect ke /links
    const hash = window.location.hash.replace('#', '');
    if (hash && ROUTES[`/${hash}`] && normalize(window.location.pathname) === '/') {
      window.history.replaceState({ path: `/${hash}` }, '', `/${hash}`);
    }

    const applyRoute = () => {
      const target = normalize(window.location.pathname);
      document.title = ROUTES[target].title;
      scrollToSection(ROUTES[target].section, false);
    };

    applyRoute();
    window.addEventListener('popstate', applyRoute);

    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target instanceof Element ? event.target.closest('a') : null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Link internal berbasis path, misal /links
      if (href.startsWith('/') && !href.startsWith('//')) {
        const target = normalize(href);
        if (ROUTES[target]) {
          event.preventDefault();
          navigate(target);
        }
        return;
      }

      // Dukung anchor lama, misal #links
      if (href.startsWith('#')) {
        const target = `/${href.slice(1)}`;
        if (ROUTES[target]) {
          event.preventDefault();
          navigate(target);
        }
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('popstate', applyRoute);
      document.removeEventListener('click', onClick);
    };
  }, []);
}

// Auto-deploy pipeline verified.
