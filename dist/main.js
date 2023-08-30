/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNwb25zaXZlLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGxpbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRsaW5lLWJ0blwiKTtcbmNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rcy1jb250YWluZXJcIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB0b3BMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbGlua1wiKTtcbi8vXG4vLyBzZXQgdGhlIGN1cnJlbnQgeWVhciBvbiB0aGUgZGF0ZSBjbGFzc1xuZGF0ZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbi8vXG5oZWFkbGluZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBsZXQgbGlua3NIZWlnaHQgPSBsaW5rcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGxldCBsaW5rc0NvbnRhaW5lckhlaWdodCA9IGxpbmtzQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICBpZiAobGlua3NDb250YWluZXJIZWlnaHQgPT09IDApIHtcbiAgICBsaW5rc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtsaW5rc0hlaWdodH1weGA7XG4gIH0gZWxzZSB7XG4gICAgbGlua3NDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgfVxufSk7XG4vL1xuXG4vLyBsZXRzIGdldCB0aGUgaGVpZ3RoIG9mIHRoZSBuYXYgYmFyIGFuZCB0aGVuIHdoZW4gd2Ugc2Nyb2xsIHRocm8gdGhhdCBzcGVjaWYgaGVpZ2h0IHdlIGltcGxlbWVudCBmaXhlZCBuYXY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gcGFnZVlPZmZzZXQ7XG4gIGxldCBuYXZiYXJIZWlnaHQgPSBuYXZiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBpZiAoY3VycmVudEhlaWdodCA+IG5hdmJhckhlaWdodCkge1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtbmF2XCIpO1xuICB9IGVsc2Uge1xuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWQtbmF2XCIpO1xuICB9XG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gNTkwKSB7XG4gICAgdG9wTGluay5jbGFzc0xpc3QuYWRkKFwic2hvdy10b3AtbGlua1wiKTtcbiAgfSBlbHNlIHtcbiAgICB0b3BMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRvcC1saW5rXCIpO1xuICB9XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRIZWlnaHQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=