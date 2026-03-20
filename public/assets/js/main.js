// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
}

// Active nav link
const path = window.location.pathname;
document.querySelectorAll('#main-nav a').forEach(link => {
  if (link.getAttribute('href') === path || 
      (path !== '/' && link.getAttribute('href') !== '/' && path.startsWith(link.getAttribute('href')))) {
    link.closest('li')?.classList.add('active');
  }
});
