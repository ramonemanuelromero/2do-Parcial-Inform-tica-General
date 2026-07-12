//Generador Datos Curiosos
//capturo con "querySelector" los elementos boton y parrafo, y los guardo en las constantes elBoton y elTexto para usarlos luego  
const elBoton = document.querySelector('#boton-dato');
const elTexto = document.querySelector('#dato-curioso');
//declaramos los datos curiosos que son constantes ya que no cambian 
const datosCuriosos = [
  "Co-creador de Processing en el MIT Media Lab.",
  "Influenciado por Sol LeWitt y el arte conceptual.",
  "Exposiciones en MoMA, Centre Pompidou e ICA Londres.",
  "Muchas obras generadas en tiempo real, nunca iguales dos veces.",
  "Autor de libros sobre programación creativa.",
  "Profesor en el Departamento de Diseño de Medios en UCLA.",
];

//Luego para que el programa responda al usuario uso el metodo "addEventListener", para que al hacer click en el boton (boton-dato) se ejecute la funcion "mostrarDato"
elBoton.addEventListener('click', function() {
    mostrarDato(); 
});

//Función para mostrar un dato curioso al azar
//esta funcion se ejecuta generando un indice aleatorio. Math.random nos genera un numero al azar entre 0 y 1, ese numero se multiplica por el largo de array (datosCuriosos.length). Luego Math.floor redondea el resultado de esta operacion hacia abajo para obtener un numero entero que coincida con una posicion en el array de datosCuriosos, es decir un numero entre 0 y 5, ya que este array tiene 6 elementos
function mostrarDato() {
  const indice = Math.floor(Math.random() * datosCuriosos.length);
  document.querySelector("#dato-curioso").innerText = datosCuriosos[indice]; 
  //por ultimo se usa este numero que devuelve la operacion anterior para elegir uno de los datos curiosos de la lista segun la posicion que ocupa y lo inserta en el HTML con la propiedad innerText y cambia el texto en la pagina
}

//galeria de obras
const obrasGaleria = [
    { nombre: "Atomism", año: 2001, imagen: "./img/atomism.jpg" },
    { nombre: "In Silico", año: 2018, imagen: "./img/inSilico.PNG" },
    { nombre: "CENTURY", año: 2012, imagen: "./img/century.png" },
    { nombre: "Caesuras", año: 2020, imagen: "./img/caesuras.jpg" },
    { nombre: "Compressed Cinema", año: 2020, imagen: "./img/compressedCinema.jpg" }
];

const galeria = document.querySelector('#contenedor-galeria');

for (let i = 0; i < obrasGaleria.length; i++) {
    galeria.innerHTML += `
        <article class="tarjeta-obra">
            <img src="${obrasGaleria[i].imagen}" alt="${obrasGaleria[i].nombre}">
            <h3>${obrasGaleria[i].nombre}</h3>
            <p>Año: ${obrasGaleria[i].año}</p>
        </article>
    `;
}