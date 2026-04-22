// const panels = document.querySelectorAll(".panel");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   panels.forEach((panel, index) => {
//     const offset = window.innerHeight * index;
//     const progress = (scrollY - offset) / window.innerHeight;

//     if (progress > 0) {
//       const scale = 1 - Math.min(progress * 0.1, 0.1);
//       const opacity = 1 - Math.min(progress * 0.3, 0.3);

//       panel.style.transform = `scale(${scale})`;
//       panel.style.opacity = opacity;
//       panel.style.zIndex = panels.length - index;
//     } else {
//       panel.style.transform = "scale(1)";
//       panel.style.opacity = "1";
//     }
//   });
// });
