function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.volume = 0; // Commence avec le volume à 0
    audio.play();

    // Augmente progressivement le volume avec un effet crescendo
    var fadeInInterval = setInterval(function () {
        if (audio.volume < 1) {
            // L'augmentation du volume devient plus rapide à chaque étape pour créer un effet de crescendo
            audio.volume = Math.min(audio.volume + 0.01 + (audio.volume * 0.01), 1); // Augmentation exponentielle
        } else {
            clearInterval(fadeInInterval); // Arrête l'intervalle lorsque le volume atteint 1
        }
    }, 150); // Augmentation du volume toutes les 150 ms

    // Relance la musique lorsqu'elle se termine
    audio.onended = function() {
        playMusic(); // Relance la musique
    };
}
