document.querySelectorAll('.product-box').forEach(box => {
    box.addEventListener('click', function() {
      const options = box.querySelector('.options');
      if (options.classList.contains('hidden')) {
        options.classList.remove('hidden');
      } else {
        options.classList.add('hidden');
      }
    });
  });
  