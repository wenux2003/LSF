//faq
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('active');

      // Close all others
      faqButtons.forEach((q) => {
        q.classList.remove('active');
        q.querySelector('.icon').textContent = '+';
        q.nextElementSibling.style.maxHeight = null;
        q.nextElementSibling.style.opacity = 0;
      });

      // Toggle this one
      if (!isOpen) {
        btn.classList.add('active');
        btn.querySelector('.icon').textContent = '−';
        const content = btn.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
      }
    });
  });



