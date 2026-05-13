(function () {
  'use strict';

  // ─── Nav scroll state ───
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  // ─── Parallax: disable fixed bg on touch devices ───
  if (window.matchMedia('(pointer: coarse)').matches) {
    const heroBg = document.querySelector('.hero__bg');
    if (heroBg) heroBg.style.backgroundAttachment = 'scroll';
  }

  // ─── Mobile nav ───
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay   = document.querySelector('.nav__overlay');
  const overlayLinks = overlay ? overlay.querySelectorAll('a') : [];

  function openNav() {
    hamburger.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    hamburger.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      overlay.classList.contains('is-open') ? closeNav() : openNav();
    });
  }

  overlayLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });


  // ─── Galerie Lightbox ───
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = lightbox ? lightbox.querySelector('.lightbox__img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;

  document.querySelectorAll('.gallery-item[data-src]').forEach(function (item) {
    item.addEventListener('click', function () {
      lightboxImg.src = item.dataset.src;
      lightboxImg.alt = item.querySelector('img').alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeNav(); closeLightbox(); }
  });

  // ─── Scroll reveal ───
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  }
})();
