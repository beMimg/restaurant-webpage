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
const allLinks = document.querySelectorAll(".scroll-link");
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
  // console.log(currentHeight);

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      let id = e.currentTarget.getAttribute("href").slice(1);
      let element = document.getElementById(id);
      let elementDistance = element.offsetTop - navbarHeight;
      let fixedNav = navbar.classList.contains("fixed-nav");
      let linksContainerHeight = linksContainer.getBoundingClientRect().height;

      if (!fixedNav) {
        elementDistance = elementDistance - navbarHeight;
      }

      window.scrollTo({
        left: 0,
        top: elementDistance,
      });
      e.preventDefault();
      linksContainer.style.height = 0;
    });
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3BvbnNpdmUtd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkbGluZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGxpbmUtYnRuXCIpO1xuY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzLWNvbnRhaW5lclwiKTtcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzXCIpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcbmNvbnN0IHRvcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1saW5rXCIpO1xuY29uc3QgYWxsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbC1saW5rXCIpO1xuLy9cbi8vIHNldCB0aGUgY3VycmVudCB5ZWFyIG9uIHRoZSBkYXRlIGNsYXNzXG5kYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuLy9cbmhlYWRsaW5lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBsaW5rc0hlaWdodCA9IGxpbmtzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgbGV0IGxpbmtzQ29udGFpbmVySGVpZ2h0ID0gbGlua3NDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gIGlmIChsaW5rc0NvbnRhaW5lckhlaWdodCA9PT0gMCkge1xuICAgIGxpbmtzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2xpbmtzSGVpZ2h0fXB4YDtcbiAgfSBlbHNlIHtcbiAgICBsaW5rc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAwO1xuICB9XG59KTtcbi8vXG4vLyBsZXRzIGdldCB0aGUgaGVpZ3RoIG9mIHRoZSBuYXYgYmFyIGFuZCB0aGVuIHdoZW4gd2Ugc2Nyb2xsIHRocm8gdGhhdCBzcGVjaWYgaGVpZ2h0IHdlIGltcGxlbWVudCBmaXhlZCBuYXY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gcGFnZVlPZmZzZXQ7XG4gIGxldCBuYXZiYXJIZWlnaHQgPSBuYXZiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gbmF2YmFySGVpZ2h0KSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJmaXhlZC1uYXZcIik7XG4gIH0gZWxzZSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZC1uYXZcIik7XG4gIH1cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiA1OTApIHtcbiAgICB0b3BMaW5rLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRvcC1saW5rXCIpO1xuICB9IGVsc2Uge1xuICAgIHRvcExpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctdG9wLWxpbmtcIik7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coY3VycmVudEhlaWdodCk7XG5cbiAgYWxsTGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zbGljZSgxKTtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgbGV0IGVsZW1lbnREaXN0YW5jZSA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gbmF2YmFySGVpZ2h0O1xuICAgICAgbGV0IGZpeGVkTmF2ID0gbmF2YmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLW5hdlwiKTtcbiAgICAgIGxldCBsaW5rc0NvbnRhaW5lckhlaWdodCA9IGxpbmtzQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgaWYgKCFmaXhlZE5hdikge1xuICAgICAgICBlbGVtZW50RGlzdGFuY2UgPSBlbGVtZW50RGlzdGFuY2UgLSBuYXZiYXJIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogZWxlbWVudERpc3RhbmNlLFxuICAgICAgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsaW5rc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAwO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9