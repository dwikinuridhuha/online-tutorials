let text = document.querySelector(".text");
let spans = Array.from(text.textContent.trim())
  .map((chart) => {
    return `<span>${chart}</span>`;
  })
  .join("");
text.innerHTML = spans;

let spanList = text.querySelectorAll("span");
spanList.forEach((span, index) => {
  span.addEventListener("mouseover", () => {
    spanList.forEach((s, i) => {
      let distance = Math.abs(index - i);
      let delay = (distance * 0.1).toFixed(1);
      s.style.transitionDelay = `${delay}s`;
    });
  });

  span.addEventListener("mouseleave", () => {
    spanList.forEach((s) => {
      s.style.transitionDelay = `0s`;
    });
  });
});
