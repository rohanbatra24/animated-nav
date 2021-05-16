const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Nav animation
const navAnimation = (direction1, direction2) => {
  navItems.forEach((item, i) => {
    item.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

// Toggle menu bar
const toggleNav = () => {
  // toggle: Menu Bars open/closed
  menuBars.classList.toggle("change");

  // toggle: menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate in - Nav items
    navAnimation("out", "in");
  } else {
    //Animate Out - Overlay
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");

    // Animate out - Nav items
    navAnimation("in", "out");
  }
};

// Event listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => nav.addEventListener("click", toggleNav));
