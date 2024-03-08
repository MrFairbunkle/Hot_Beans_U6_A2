window.addEventListener('DOMContentLoaded', (event) => {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('#navbar a');

        function makeActive() {
          // Get current scroll position
          const scrollPosition = window.scrollY;

          sections.forEach((section) => {
            if (
              scrollPosition >= section.offsetTop - 50 &&
              scrollPosition < section.offsetTop + section.offsetHeight - 50
            ) {
              const id = section.getAttribute('id');
              // Remove active class from all navbar links
              navbarLinks.forEach((link) => {
                link.classList.remove('active');
              });
              // Add active class to the corresponding navbar link
              navbarLinks.forEach((link) => {
                if (link.getAttribute('href').slice(1) === id) {
                  link.classList.add('active');
                }
              });
            }
          });
        }

        // Event listener for scrolling
        window.addEventListener('scroll', makeActive);
        // Initial call to makeActive
        makeActive();
      });
