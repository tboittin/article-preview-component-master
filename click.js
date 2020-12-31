let buttons = document.getElementsByClassName("button");
let inactiveFooter = document.getElementsByClassName(
  "preview-footer-inactive"
)[0];
let activeFooter = document.getElementsByClassName("preview-footer-active")[0];
let tooltip = document.getElementsByClassName(
  "preview-footer-inactive-button-tooltip"
)[0];
let previewPicture = document.getElementsByClassName("preview-picture")[0];
let previewBody = document.getElementsByClassName("preview-body")[0];

let transitionWidth = 1440;

const openShareMobile = () => {
  inactiveFooter.style.display = "none";
  activeFooter.style.display = "block";
};

const closeShareMobile = () => {
  inactiveFooter.style.display = "flex";
  activeFooter.style.display = "none";
};

const openShareDesktop = () => {
  tooltip.style.display = "block";
};

const closeShareDesktop = () => {
  tooltip.style.display = "none";
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.classList.toggle("active");

    if (window.matchMedia(`(max-width: ${transitionWidth}px)`).matches) {
      // small device
      if (this.classList.contains("active")) {
        openShareMobile();
      } else {
        closeShareMobile();
      }
    } else {
      //large device
      if (this.classList.contains("active")) {
        openShareDesktop();
      } else {
        closeShareDesktop();
      }
    }
  });
}

previewPicture.addEventListener("click", function () {
  if (buttons[0].classList.contains("active")) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[0].classList.toggle("active");
      if (window.matchMedia(`(max-width: ${transitionWidth}px)`).matches) {
        closeShareMobile();
      } else {
        closeShareDesktop();
      }
    }
  }
});

previewBody.addEventListener("click", function () {
  if (buttons[0].classList.contains("active")) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[0].classList.toggle("active");
      if (window.matchMedia(`(max-width: ${transitionWidth}px)`).matches) {
        closeShareMobile();
      } else {
        closeShareDesktop();
      }
    }
  }
});
