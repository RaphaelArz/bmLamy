function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.volume = 0; // Commence avec le volume à 0
    audio.play();

    // Augmente progressivement le volume
    var fadeInInterval = setInterval(function () {
        if (audio.volume < 1) {
            audio.volume = Math.min(audio.volume + 0.001, 1); // Incrémente le volume
        } else {
            clearInterval(fadeInInterval); // Arrête l'intervalle lorsque le volume atteint 1
        }
    }, 200); // Incrémente toutes les 200 ms
}
