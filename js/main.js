const collapseNav = document.querySelector(".collapse-nav");
const filterNav = document.querySelector(".filter-nav");
const filterNavBottom =
  filterNav.getBoundingClientRect().bottom + window.pageYOffset;
let navIsCollapsed = false;

// Collapse Nav Functionality
window.addEventListener("scroll", function() {
  if (window.scrollY > filterNavBottom) {
    collapseNav.classList.add("collapsed");
    if (!navIsCollapsed) {
      collapseNav.animate(
        [
          // keyframes
          { transform: "translateY(-50px)" },
          { transform: "translateY(0px)" }
        ],
        {
          // timing options
          duration: 300,
          fill: "forwards",
          iterations: 1
        }
      );
      navIsCollapsed = true;
    }
  } else {
    if (navIsCollapsed) {
      collapseNav.animate(
        [
          // keyframes
          { transform: "translateY(0px)" },
          { transform: "translateY(-50px)" }
        ],
        {
          // timing options
          duration: 200,
          iterations: 1,
          fill: "auto"
        }
      );
      navIsCollapsed = false;
    }
    setTimeout(() => {
      collapseNav.classList.remove("collapsed");
    }, 200);
  }
});
