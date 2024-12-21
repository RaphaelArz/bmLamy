// Ajoute la classe no-scroll par défaut lorsque la page se charge
document.body.classList.add("no-scroll");

function startCountdown() {
  const button = document.getElementById("invitationButton");
  const countdown = document.getElementById("countdown");
  const overlay = document.getElementById("overlay");

  // Cache le bouton
  button.style.display = "none";

  // Affiche le compte à rebours
  countdown.style.display = "block";

  let timeLeft = 48;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.style.display = "none"; // Cache le compte à rebours
      overlay.classList.add("hidden"); // Masque l'overlay
      document.body.classList.remove("no-scroll"); // Permet le défilement
    }
  }, 1000); // Décrément toutes les secondes
}
