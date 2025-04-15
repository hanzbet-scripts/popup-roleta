function girarRoleta() {
  const el = document.getElementById("thosijulio-roleta");
  const botao = document.getElementById("thosijulio-botao-roleta");
  const divOne = document.getElementById("thosijulio-popup-before");
  const divTwo = document.getElementById("thosijulio-popup-after");

  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "thosijulio-girar 3s ease-out forwards";

  botao.disabled = true;
  botao.style.cursor = "not-allowed";

  setTimeout(() => {
    divOne.style.display = "none";
    divTwo.style.display = "flex";
  }, 3800);
}
