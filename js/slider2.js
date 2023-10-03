const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  // Calculate the translation value for the slider container
  const translateValue = -index * 100;

  // Apply the animation to the slider container
  sliderContainer.style.transform = `translateX(${translateValue}%)`;

  // Remove the 'active' class from all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Add the 'active' class to the current slide
  slides[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Automatically advance the slider every 3 seconds (3000 milliseconds)
const autoSlideInterval = setInterval(autoSlide, 3000);

// Pause auto sliding when hovering over the carousel
carousel.addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

// Resume auto sliding when mouse leaves the carousel
carousel.addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});
