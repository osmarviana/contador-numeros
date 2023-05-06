let begin = document.getElementById("begin");
let end = document.getElementById("end");
let jump = document.getElementById("jump");
let response = document.getElementById("response");
const counter = document.getElementById("counter");
const score = document.getElementById("score");

counter.addEventListener("click", () => {
  if (
    begin.value.length == 0 ||
    end.value.length == 0 ||
    jump.value.length == 0
  ) {
    response.innerText = "";
    score.innerText = "Impossível contar";
  } else {
    response.innerText = "Contando...";
    score.innerHTML = "";

    if (Number(jump.value) <= 0) {
      alert("Passo inválido, considerando Pular 1.");
      jump.value = 1;
    }
    if (Number(begin.value) < Number(end.value)) {
      for (
        let i = Number(begin.value);
        i <= Number(end.value);
        i += Number(jump.value)
      ) {
        score.innerHTML += `<span>${i}👉🏻</span>`;
      }
    } else {
      for (
        let i = Number(begin.value);
        i > Number(end.value);
        i -= Number(jump.value)
      ) {
        score.innerHTML += `<span>${i}👉🏻</span>`;
      }
    }
    score.innerHTML += `🏁`;
  }
});
