document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-link');

    function changeNavState() {
      var index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }

    changeNavState();

    window.addEventListener('scroll', changeNavState);
  });
