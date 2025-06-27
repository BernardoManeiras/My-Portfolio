document.querySelectorAll('[data-target]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = e.target.getAttribute('data-target');
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});
