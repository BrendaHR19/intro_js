
let mi_texto = document.getElementById("text1") //uniendo la pagina con la id de html
let mi_boton = document.getElementById("boton1")
let cuadro_texto = document.getElementById("cuadro_texto")

//crear manejador de eventos
mi_boton.addEventListener("click", function(){
    mi_boton.style.backgroundColor="purple"
    let textoIngresado = mi_texto.value;
    // Mostrar el texto ingresado en el cuadro
    cuadro_texto.innerText = textoIngresado;
})

