// Projects category filter
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;

      // Update active button
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide cards
      cards.forEach((card) => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
})();
