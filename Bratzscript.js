document.addEventListener("click", (e) => {
    createPopup(e.clientX, e.clientY);
});

function createPopup(x, y) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Texto del popup (puedes cambiarlo)
    popup.innerHTML = "✨ ¡Alerta!   Vas a abandonar la vida que quieres. ✨";

    // Posición del popup en la pantalla
    popup.style.left = (x + 10) + "px";
    popup.style.top = (y + 10) + "px";

    document.body.appendChild(popup);

     const sound = document.getElementById("popupSound").cloneNode(true);
    sound.play();
}