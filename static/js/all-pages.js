document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll("h1, main, footer");
  let navbarToggler = document.querySelector('.navbar-toggler');
  
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", function () {
      let collapseElement = document.querySelector('.navbar-collapse');
      const bsCollapse = new bootstrap;
      
      if (collapseElement.classList.contains("show")) {
        navbarToggler.setAttribute('title', 'Expand');

        bsCollapse.Collapse(collapseElement, {toggle: true});
      }
    });
  }

  navbarToggler.addEventListener("click", function () {
    if (navbarToggler.classList.contains("collapsed"))
      navbarToggler.setAttribute('title', 'Expand');
    else if (!navbarToggler.classList.contains("collapsed"))
      navbarToggler.setAttribute('title', 'Collapse');
  });
  
});
