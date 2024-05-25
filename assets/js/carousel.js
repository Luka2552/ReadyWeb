document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-section-left-arrow').forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const imagesWrapper = arrow
        .closest('.main-section-info-section')
        .querySelector('.main-section-images-wrapper');
      imagesWrapper.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth',
      });
    });
  });
  const images = document.querySelectorAll('.main-section-carousel-image');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      let link;

      // კატეგორიის მიხედვით არჩევს
      if (src.includes('informationWebsite')) {
        link = 'internalPage.html';
      } else if (src.includes('restaurantWebsite')) {
        link = 'internalPage.html';
      } else if (src.includes('travelWebsite')) {
        link = 'internalPage.html';
      }

      // მითითებულ მისამართზე გადაგყავს.
      if (link) {
        window.location.href = link;
      }
    });
  });
  document.querySelectorAll('.main-section-right-arrow').forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const imagesWrapper = arrow
        .closest('.main-section-info-section')
        .querySelector('.main-section-images-wrapper');
      imagesWrapper.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth',
      });
    });
  });
});
