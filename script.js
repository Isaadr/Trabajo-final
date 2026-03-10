const varTexto = document.getElementById("texto");
const varInput = document.getElementById("miInput");
const textos = ["Sagitario: Eres increíble",
     "las cosas buenas están por llegar.",
      "Virgo: Ese es el camino",
       "no dudes de ti!",
        "Tauro: Todas las cosas funcionarán a tu favor", 
        "Sigue esperando.",
         "Leo: Esta es tu semana de suerte",
          "Go gir!", 
         "Capricornio: Tu belleza es tu fuerza", 
         "no dudes nunca." ];

        let iTxt = 0; 
varTexto.addEventListener("click", ()=> {
    varTexto.innerText = textos[iTxt]
    iTxt += 1;
        if(iTxt >= textos.length){ 
        iTxt = 0
    }

});


    function mostrarTexto() {
        const texto = document.getElementById('miInput').value;
        
        if (texto.trim() === '') {
            alert('Por favor escribe algo');
            return;
        }
        
     // Generar porcentaje aleatorio
    const porcentaje = Math.floor(Math.random() * 101);

    // Frases posibles
    const frases = [
        "Esta es la persona indicada para ti",
        "Tal vez algo mejor está por llegar",
        "El amor está en el aire",
        "Sigue intentándolo, el amor llegará",
        "¡Eso es. Este es el amor de tu vida!",
    ];

    // Elegir frase aleatoria
    const frase = frases[Math.floor(Math.random() * frases.length)];

    // Mostrar nombre
    document.getElementById('textoMostrado').textContent = texto;

    // Mostrar porcentaje
    document.getElementById('porcentaje').textContent = porcentaje;

    // Mostrar frase
    document.getElementById('fraseResultado').textContent = frase;

    // Mostrar el contenedor
    document.getElementById('resultado').style.display = 'block';
}


// Ejecutar con ENTER
document.getElementById('miInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        mostrarTexto();
    }
    });

function toggleMusic(){
let audio = document.getElementById("musica");
let icon = document.getElementById("icon");

if(audio.paused){
audio.play();
icon.innerHTML = "⏸";
}else{
audio.pause();
icon.innerHTML = "▶";
}
}



