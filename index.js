let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

const cursor = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * 0.2;
  posY += (mouseY - posY) * 0.2;
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
  requestAnimationFrame(animate);
}

animate();


/* very small vanilla carousel */
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.dot');
  const carousel = document.querySelector('.carousel');
  let index = 0;
  const totalImages = images.length;

  function showSlide(i) {
    carousel.style.transform = `translateX(${-i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
  }

  // On dot click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(index);
    });
  });

  // Auto slide every 4 seconds
  setInterval(() => {
    index = (index + 1) % totalImages;
    showSlide(index);
  }, 4000);

  // Initial slide
  showSlide(index);