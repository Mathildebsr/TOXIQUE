document.addEventListener("DOMContentLoaded", function () {
  const bigCircles = document.querySelectorAll(".big-circle");

  bigCircles.forEach((bigCircle) => {
    const smallCircles = bigCircle.querySelectorAll(".small-circle");
    let timeout;

    // Fonction pour afficher les petits cercles
    const showSmallCircles = () => {
      smallCircles.forEach((circle) => circle.classList.add("visible"));
      clearTimeout(timeout); // Annule tout masquage en cours
    };

    // Fonction pour masquer les petits cercles avec un délai
    const hideSmallCircles = () => {
      timeout = setTimeout(() => {
        smallCircles.forEach((circle) => circle.classList.remove("visible"));
      }, 500); // Temps pour couvrir la zone morte
    };

    // Quand la souris entre dans le grand cercle, afficher les petits cercles
    bigCircle.addEventListener("mouseenter", showSmallCircles);

    // Quand la souris quitte le grand cercle, lancer le délai de masquage
    bigCircle.addEventListener("mouseleave", hideSmallCircles);

    // Ajouter les mêmes comportements pour les petits cercles
    smallCircles.forEach((smallCircle) => {
      smallCircle.addEventListener("mouseenter", showSmallCircles);
      smallCircle.addEventListener("mouseleave", hideSmallCircles);
    });
  });
});

    const titre = document.getElementById("titre");
    setInterval(() => {
      titre.style.visibility = titre.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000); // Clignote toutes les 500ms
  
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    
    // Duplique les éléments pour un effet infini
    const items = [...carousel.children];
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Optionnel : Ajuster la vitesse au survol
    let animationSpeed = 15; // en secondes
    let isPaused = false;

    carousel.addEventListener("mouseenter", () => {
        isPaused = true;
        carousel.style.animationPlayState = "paused";
    });

    carousel.addEventListener("mouseleave", () => {
        isPaused = false;
        carousel.style.animationPlayState = "running";
    });

    // Optionnel : Recalcule la durée d'animation en fonction du nombre d'éléments
    function adjustAnimationSpeed() {
        const itemWidth = items[0].offsetWidth;
        const totalWidth = itemWidth * items.length;
        animationSpeed = totalWidth / 100; // Ajuste la durée
        carousel.style.animation = `scroll ${animationSpeed}s linear infinite`;
    }

    window.addEventListener("resize", adjustAnimationSpeed);
    adjustAnimationSpeed(); // Appel initial
});

document.getElementById('trailer-btn').addEventListener('click', function() {
var modal = document.getElementById('videoModal');
var video = document.getElementById('trailerVideo');

modal.style.display = 'flex'; // Affiche la modale
video.play(); // Joue la vidéo
});

document.querySelector('.close').addEventListener('click', function() {
var modal = document.getElementById('videoModal');
var video = document.getElementById('trailerVideo');

modal.style.display = 'none'; // Cache la modale
video.pause(); // Met la vidéo en pause
});

// Fermer la modale si on clique en dehors de la vidéo
window.addEventListener('click', function(event) {
var modal = document.getElementById('videoModal');
var video = document.getElementById('trailerVideo');

if (event.target === modal) {
modal.style.display = 'none';
video.pause();
}
});
