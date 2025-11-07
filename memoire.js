// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `L’utilisation excessive des réseaux sociaux peut altérer la mémoire à court terme. En raison de l’hyperstimulation constante et de l’interruption fréquente par des notifications, l’utilisateur a plus de mal à se concentrer sur des informations importantes, réduisant ainsi la capacité de mémorisation. On en ressent tous de plus en plus les impacts sans pour autant faire le lien avec les réseaux sociaux. Cependant c'est aujourd'hui un sujet qui questionne beaucoup dans le monde médical, il y'aura t'il des effet à long terme sur la mémoire ? Vous pouvez facilement mesurez cet effet de trouble de la mémoire de façon concrète, grace à un exercice simple: scroller sur tiktok comme à votre habitude et tentez de vous souvenir de temps en temps qu'elle était le sujet du tiktok 2 vidéos plus haut que celle que vous venez de visionnez, vous ne vous en souvenez plus ? moi non plus. On pense à tord que l'on emmagasine de nombreuses informations en scrollant mais c'est en réalité le contraire. `;
  
  const dynamicText = document.getElementById("dynamic-text");
  if (dynamicText) { // Vérifie que l'élément existe avant d'exécuter le script
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        dynamicText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40); // Ajuste la vitesse d'écriture (40 ms par caractère)
      }
    }

    typeWriter();
  }
});

// Quiz interactif
document.addEventListener("DOMContentLoaded", () => {
  const quizSection = document.getElementById("quiz-section");
  if (quizSection) { // Vérifie que l'élément existe avant de lancer le quiz
    displayQuestion();
  }
});

const quizData = [
  {
    question: "Les réseaux sociaux peuvent affecter la mémoire en :",
    options: ["Améliorant la capacité à mémoriser des informations complexes",
"Rendant les utilisateurs plus dépendants aux notifications et moins attentifs",
"Favorisant une meilleure concentration",
"Augmentant les performances cognitives"
],
    correct: 1,
  },
  {
    question: "Quel phénomène lié aux réseaux sociaux peut altérer la mémoire ?",
    options: [
"Une concentration accrue sur les détails importants",
      "La surcharge cognitive due à l’excès d’informations",
"Une amélioration des souvenirs à long terme",
"Une meilleure gestion du multitâche"],
    correct: 1,
  },
  {
    question: "Pourquoi les réseaux sociaux nuisent-ils parfois à la mémoire à court terme ?",
    options: [
"Parce qu’ils favorisent l’analyse approfondie des informations",
"Parce qu’ils aident à organiser efficacement les souvenirs",
      "À cause d’une trop grande sollicitation du cerveau par des contenus multiples et rapides",
"Parce qu’ils réduisent l’accès à des informations en ligne"],
    correct: 2,
  },
  {
    question: "Comment les notifications constantes influencent-elles la mémoire ?",
    options: ["Elles augmentent la capacité à se souvenir des tâches importantes",
"Elles renforcent la concentration sur les tâches essentielles",
              "Elles divisent l’attention et réduisent la capacité de mémorisation",
"Elles n’ont aucun impact sur la mémoire"],
    correct: 2,
  },
  {
    question: "Quelle habitude peut aider à limiter les troubles de la mémoire causés par les réseaux sociaux ?",
    options: [
      "Réduire le temps passé sur les réseaux et pratiquer des activités hors ligne",
"Consulter les réseaux sociaux uniquement la nuit",
"Réagir à toutes les notifications dès leur apparition",
"Augmenter son nombre d’abonnements pour varier les contenus"
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;

// Affiche la question actuelle
function displayQuestion() {
  const questionElement = document.getElementById("quiz-question");
  const optionsElement = document.getElementById("quiz-options");
  const feedbackElement = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("next-question");

  // Réinitialiser
  feedbackElement.textContent = "";
  nextButton.style.display = "none";
  optionsElement.innerHTML = "";

  if (currentQuestion < quizData.length) {
    // Affiche la question
    const currentData = quizData[currentQuestion];
    questionElement.textContent = currentData.question;

    // Génère les boutons des options
    currentData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsElement.appendChild(button);
    });
  } else {
    // Si le quiz est terminé
    displayScore();
  }
}

// Vérifie la réponse sélectionnée
function checkAnswer(selected) {
  const currentData = quizData[currentQuestion];
  const feedbackElement = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("next-question");

  if (selected === currentData.correct) {
    feedbackElement.textContent = "Bonne réponse !";
    feedbackElement.style.color = "#9ef01a";
    score++;
  } else {
    feedbackElement.textContent = `Mauvaise réponse. La bonne réponse était : ${currentData.options[currentData.correct]}`;
    feedbackElement.style.color = "red";
  }

  nextButton.style.display = "block";
}

// Passe à la question suivante
function nextQuestion() {
  currentQuestion++;
  displayQuestion();
}

// Affiche le score final
function displayScore() {
  const quizSection = document.getElementById("quiz-section");
  quizSection.innerHTML = `
    <div class="quiz-card">
      <h2>Quiz Terminé !</h2>
      <p>Votre score final est de ${score} sur ${quizData.length}.</p>
      <button onclick="restartQuiz()">Recommencer le quiz</button>
    </div>
  `;
}

// Redémarre le quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  displayQuestion();
}