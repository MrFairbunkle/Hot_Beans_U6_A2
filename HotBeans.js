window.addEventListener('DOMContentLoaded', (event) => {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('#navbar a');

        function makeActive() {
          const scrollPosition = window.scrollY;

          sections.forEach((section) => {
            if (
              scrollPosition >= section.offsetTop - 50 &&
              scrollPosition < section.offsetTop + section.offsetHeight - 50
            ) {
              const id = section.getAttribute('id');
              navbarLinks.forEach((link) => {
                link.classList.remove('active');
              });
              navbarLinks.forEach((link) => {
                if (link.getAttribute('href').slice(1) === id) {
                  link.classList.add('active');
                }
              });
            }
          });
        }

        window.addEventListener('scroll', makeActive);
        makeActive();
      });
