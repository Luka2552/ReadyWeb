document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('category');
  const buttons = document.querySelectorAll('.templates-buttons button');
  const imageWrappers = document.querySelectorAll(
    '.templates-carousel-image-wrapper'
  );

  const filterImages = (filter) => {
    imageWrappers.forEach((wrapper) => {
      const img = wrapper.querySelector('.templates-carousel-image');
      if (filter === 'all' || img.getAttribute('data-category') === filter) {
        wrapper.style.display = 'block';
      } else {
        wrapper.style.display = 'none';
      }
    });
  };

  const setActiveButton = (filter) => {
    buttons.forEach((button) => {
      if (button.getAttribute('data-filter') === filter) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  if (category) {
    filterImages(category);
    setActiveButton(category);
  } else {
    filterImages('all');
    setActiveButton('all');
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterImages(filter);
      setActiveButton(filter);
    });
  });

  document.querySelectorAll('.templates-carousel-image').forEach((img) => {
    img.addEventListener('click', () => {
      const link = img.getAttribute('data-link');
      window.location.href = link;
    });
  });
});
