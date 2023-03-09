const hidden = document.querySelector(".hidden");
const btnSubmit = document.querySelector(".submitbtn");
let score = document.querySelectorAll(".r2");
const howdidwe = document.querySelector(".howdidwe");
const ranking = document.querySelector(".ranking");
// const score2 = document.querySelector(".r12");
// const score3 = document.querySelector(".r13");
// const score4 = document.querySelector(".r14");
// const score5 = document.querySelector(".r15");

console.log(...score);
score = [...score];

// for (const btn in score) {
//   console.log(`You have clicked ${btn}`);
// }
const ranks = document.createElement("div");
ranks.style.cssText =
  "background: hsl(216, 12%, 54%); width: fit-content; padding: 0.5rem";

let result = score.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "grey";
    btn.style.color = "white";
    console.log(btn);
    ranking.innerHTML = `You clicked ${btn.innerHTML} of 5`;
  });
});
// ranks.appendChild(result);
document.body.appendChild(ranks);

btnSubmit.addEventListener("onmouseover", function () {
  css(score, {
    "background-color": "hsl(217, 12%, 63%)",
  });
});

btnSubmit.addEventListener("click", function () {
  hidden.style.display = "flex";
  howdidwe.style.display = "none";
});
