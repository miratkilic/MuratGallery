// ======== Плавное появление фото при прокрутке ========
const images = document.querySelectorAll('.photo-grid img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

images.forEach(img => observer.observe(img));

// ======== Плавное появление текста на главной ========
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.subtitle');
  const btn = document.querySelector('.btn');

  if (title && subtitle && btn) {
    title.style.opacity = 0;
    subtitle.style.opacity = 0;
    btn.style.opacity = 0;

    setTimeout(() => {
      title.style.transition = 'opacity 1.5s ease';
      subtitle.style.transition = 'opacity 2s ease';
      btn.style.transition = 'opacity 2.5s ease';
      title.style.opacity = 1;
      subtitle.style.opacity = 1;
      btn.style.opacity = 1;
    }, 300);
  }
});
