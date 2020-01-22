const collapseNav = document.querySelector(".collapse-nav");
const filterNav = document.querySelector(".filter-nav");
const filterNavBottom =
  filterNav.getBoundingClientRect().bottom + window.pageYOffset;
const toolsBtn = $("#tools");
const filtersMeta = $("#filters-meta");
const filtersOptions = $("#filters-options");

let navIsCollapsed = false;

// Let the search nav collapse after scrolling past the filter-nav links/btns
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
          duration: 50,
          iterations: 1,
          fill: "auto"
        }
      );
      navIsCollapsed = false;
    }
    setTimeout(() => {
      collapseNav.classList.remove("collapsed");
    }, 50);
  }
});

// Let Tools Button Toggle filter-results content;
let isToggled = false;

toolsBtn.click(function() {
  if (!isToggled) {
    filtersMeta.animate({ top: 20, opacity: 0 }, 150);
    filtersOptions.animate({ top: -20 }, 200);
    isToggled = true;
  } else {
    filtersMeta.animate({ top: -2, opacity: 1 }, 200);
    filtersOptions.animate({ top: -53 }, 150);
    isToggled = false;
  }
});
