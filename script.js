const texto = document.getElementById("texto");

const texto = ["Sagitario: eres una chica condenada al éxito", "Virgo: cosas grandes te esperan sigue así", "Tauro: la felicidad está dentro de ti"];
let textoOriginal = true;
let iTxt = 0;

if(undefined === true) {

}else {
    texto.innerText = "Sagitario"
}

console.log(texto);
texto.addEventListener("click", () => {
    texto.innerText = textos [iTxt];
    iTxt += 1; 
    if(iTxt >= textos.length){
      iTxt = 0  
    }

});
