// Smooth scrolling for navigation links
const navbarLinks = document.querySelectorAll('.navbar-menu a');

navbarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70, // offset to account for navbar height
      behavior: 'smooth',
    });
  });
});

// Handle form submission
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simulating form submission (you can replace this with actual AJAX or fetch request)
  console.log('Form submitted:', { name, email, message });
  alert('Thank you for your message! We will get back to you soon.');

  // Clear the form after submission
  contactForm.reset();
});

// Sticky navbar effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
