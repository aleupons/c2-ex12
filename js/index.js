const generarNum = () => Math.floor(Math.random() * 10 + 1);

const numeroAleatori = generarNum();
const numero = document.querySelector(".numero");
const boto = document.querySelector(".adivinar");
const missatge = document.querySelector(".mensaje");

boto.addEventListener("click", (event) => {
  if (numero.value !== "") {
    event.preventDefault();
    if (+numero.value === numeroAleatori) {
      missatge.classList.remove("error");
      missatge.classList.add("acierto");
      missatge.textContent = "El número ha sido acertado";
      boto.disabled = true;
      numero.disabled = true;
    } else {
      missatge.textContent =
        +numero.value < numeroAleatori
          ? "El número tiene que ser mayor"
          : "El número tiene que ser menor";
      missatge.classList.remove("acierto");
      missatge.classList.add("error");
    }
  } else {
    missatge.classList.remove("error");
    missatge.classList.remove("acierto");
    missatge.textContent = "Introduzca un número";
  }
});
