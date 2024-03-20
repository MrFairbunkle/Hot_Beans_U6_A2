window.addEventListener('scroll', function() {
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    
    highlightNavItem(currentSection);
  });

  function highlightNavItem(sectionId) {
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
      item.classList.remove('highlight');
      if (item.getAttribute('href').slice(1) === sectionId) {
        item.classList.add('highlight');
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
