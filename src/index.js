const headlineBtn = document.querySelector(".headline-btn");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector(".nav");
const links = document.querySelector(".links");
const date = document.querySelector(".date");
const topLink = document.querySelector(".top-link");
//
// set the current year on the date class
date.textContent = new Date().getFullYear();
//
headlineBtn.addEventListener("click", function () {
  let linksHeight = links.getBoundingClientRect().height;
  let linksContainerHeight = linksContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
//

// lets get the heigth of the nav bar and then when we scroll thro that specif height we implement fixed nav;
window.addEventListener("scroll", function () {
  let currentHeight = pageYOffset;
  let navbarHeight = navbar.getBoundingClientRect().height;
  if (currentHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (currentHeight > 590) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
  console.log(currentHeight);
});
