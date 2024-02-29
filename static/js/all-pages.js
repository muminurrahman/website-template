document.addEventListener("DOMContentLoaded", function () {
  let tags = document.querySelectorAll("h1, main, footer");

  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", function () {
      let collapseElement = document.querySelector('.navbar-collapse');
      if (collapseElement.classList.contains("show")) {
        let bsCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: true
        });
      }
    });
  }
  
  let navbar_toggler = document.querySelector('.navbar-toggler');
  navbar_toggler.onclick = function() {myFunction()};

  function myFunction() {
    if (navbar_toggler.classList.contains("collapsed")) {
      navbar_toggler.setAttribute('title', 'Expand');
    } else {
      navbar_toggler.setAttribute('title', 'Collaspe');
    }
  }   
});
