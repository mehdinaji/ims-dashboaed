document.addEventListener('DOMContentLoaded', () => {
  const elevator = document.querySelector('.elevator');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      elevator.classList.add('visible');
    } else {
      elevator.classList.remove('visible');
    }
  });

  elevator.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});