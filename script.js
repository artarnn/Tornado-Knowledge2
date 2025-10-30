// Fade-in on scroll (Intersection Observer)
const observer = new IntersectionObserver(
  (entries)=>entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('is-visible'); }
  }),
  { root:null, threshold:0.15 }
);

// observe all reveal elements (images + hero bits)
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// optional: ensure navbar anchor offset feels smooth (CSS already has smooth scroll)
// If you need dynamic offset for a taller sticky nav, you can implement scroll-margin:
// (we keep it CSS-only for simplicity)
