const splitRight = document.querySelector(".split-right");
const splitLeft = document.querySelector(".split-left");
const container = document.getElementById("container-mainpage");

splitLeft.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

splitLeft.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

splitRight.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

splitRight.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
