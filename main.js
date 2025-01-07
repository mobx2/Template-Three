let swipeUp = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    swipeUp.style.display = "block";

    swipeUp.onclick = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  } else {
    swipeUp.style.display = "none";
  }
};
