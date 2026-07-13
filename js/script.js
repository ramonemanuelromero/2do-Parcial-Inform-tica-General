//galeria de obras
//Declare un array con todas las obras de la galeria en una constante ya que no van cambiar
const obrasGaleria = [
    { nombre: "Atomism", año: 2001, imagen: "img/atomism.jpg" },
    { nombre: "In Silico", año: 2018, imagen: "img/inSilico.PNG" },
    { nombre: "CENTURY", año: 2012, imagen: "img/century.png" },
    { nombre: "Caesuras", año: 2020, imagen: "img/caesuras.jpg" },
    { nombre: "Compressed Cinema", año: 2020, imagen: "img/compressedCinema.jpg" }
];
//para que se las obras de vean en la pagina primero capturamos el contenedro HTML con document.querySelector
const galeria = document.querySelector('#contenedor-galeria');

if (galeria !== null) {
    //leugo con un bucle for recorremos todo el array usando la propiedad .length
    for (let i = 0; i < obrasGaleria.length; i++) {
        //en cada vuelta del ciclo se inserta una de las obras con sus datos y con el operador += hacemos que se sume contenido sin borra lo anterior
        galeria.innerHTML += `
            <article class="tarjeta-obra">
                <img src="${obrasGaleria[i].imagen}" alt="${obrasGaleria[i].nombre}">
                <h3>${obrasGaleria[i].nombre}</h3>
                <p>Año: ${obrasGaleria[i].año}</p>
            </article>
        `;
    }
}


/***********************************************************************************************************************/

//creamos un boton para cambiar el diseno de la galeria 
const botonDiseno = document.querySelector('#btn-diseno');
const galeriaContenedor = document.querySelector('#contenedor-galeria');

//con este addEventListener identificamos cuando el usuario hace click en el boton
botonDiseno.addEventListener('click', function() {
    //al ejecutarse el codigo lo que sucede es que cambia la propiedad flexDirection a column, esto cambia el eje principal del Flexbox haciendo que las obras se apilen una abajo de la otra en lugar de estar en fila
    galeriaContenedor.style.flexDirection = 'column';
    galeriaContenedor.style.alignItems = 'center'; // Centramos la columna

    //Como quiero que todas las imágenes se agranden al mismo tiempo, usamos querySelectorAll() para capturar todas las tarjetas y las recorro con otro bucle para aplicarles el nuevo ancho a cada una
    const todasLasTarjetas = document.querySelectorAll('.tarjeta-obra');

    for (let i = 0; i < todasLasTarjetas.length; i++) {
        todasLasTarjetas[i].style.width = '600px'; 
    }
    
});


//**********************************************************************************************************************/

//boton cambio de diseno de la galeria
//Aca capturamos el elmento html usando nuevamente document.querySelector 
const elBotonColor = document.querySelector('#btn-color');


//El método addEventListener() se queda "escuchando" hasta que el usuario hace click, una vez lo hace se dispara la función anónima que contiene las instrucciones de cambio de diseño
elBotonColor.addEventListener('click', function() {
    //Aquí modificamos la propiedad de estilo del fondo
    galeria.style.backgroundColor = '#2c3e50'; // Color oscuro
    galeria.style.padding = '30px';
    
    // También podemos cambiar el color de los textos dentro de la galería
    const titulos = document.querySelectorAll('.tarjeta-obra h3');
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = 'white';
    }
});

//**********************************************************************************************************************/

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






