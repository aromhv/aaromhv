function enviarFormulario(nombre, telefono, correo, tema, mensaje) {
  var hojaDeCalculo = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1s4dzOKwq79QvLpO4KGPVhkzlE-mtWP3uuvVJQb-34bw/edit?usp=sharing"
  );
  var hoja = hojaDeCalculo.getSheetByName("bd");

  hoja.appendRow([nombre, telefono, correo, tema, mensaje]);
}

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
