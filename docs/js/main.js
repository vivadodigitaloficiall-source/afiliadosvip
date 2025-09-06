// main.js — shared UI behaviors for affiliates microsite (no mock tracking)

(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  const yearEl = $('#year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll + back-to-top
  const toTop = $('.to-top');
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if(toTop) toTop.style.display = window.scrollY > 600 ? 'grid' : 'none';
    if(header) header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
  if(toTop) toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  // Mobile nav toggle
  const nav = $('#nav-primary');
  const navToggle = document.querySelector('.nav-toggle');
  if(nav && navToggle){
    const close = () => { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); };
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => { if(e.target.closest('a')) close(); });
    document.addEventListener('keydown', (e) => { if(e.key==='Escape') close(); });
  }

  // Intersection animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: .2 });
  $$('[data-animate]').forEach(el => io.observe(el));

  // Fallback: if IO doesn’t fire (e.g., edge cases), reveal items after load
  window.addEventListener('load', () => {
    setTimeout(() => {
      $$('[data-animate]').forEach(el => { if(!el.classList.contains('in')) el.classList.add('in'); });
    }, 400);
  });

  // Toast helper
  window.showToast = (msg) => {
    let el = document.querySelector('.toast');
    if(!el){ el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    setTimeout(()=> el.classList.remove('show'), 1800);
  };

  // No-op: removed mock tracking to keep only functional features
})();
