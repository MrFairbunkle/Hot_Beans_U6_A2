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

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    let currentFontSize = 16;
    function updateFontSize() {
        document.body.style.fontSize = currentFontSize + 'px';
    }
    document.getElementById('increase-font').addEventListener('click', function () {
        currentFontSize += 2; 
        updateFontSize();
    });
    document.getElementById('decrease-font').addEventListener('click', function () {
        currentFontSize -= 2;
        updateFontSize();
    });
});