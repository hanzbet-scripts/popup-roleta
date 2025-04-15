const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const style = document.createElement("style");

style.innerHTML = `
.ekJXu:has(span:contains("Registrar com Google")) {
  display: none !important;
}
  #thosijulio-popup p, #thosijulio-popup h1, #thosijulio-popup h2 {
    margin: 0;
  }
  #thosijulio-popup a {
    all: unset; /* Remove TODOS os estilos padrão */
    display: inline-block; /* Permite aplicar padding/margins se necessário */
    cursor: pointer; /* Mantém o cursor de link */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes thosijulio-girar {
    to {
      transform: rotate(1058deg);
    }
  }

  #thosijulio-roleta {
    transition: transform 3s ease-out;
  }
  
  @media (max-width: 500px) {
    #thosijulio-popup-before, #thosijulio-popup-after {
      width: 90% !important;
      height: auto !important;
    }
  }
  `;

document.head.appendChild(style);
