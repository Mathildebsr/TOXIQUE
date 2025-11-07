// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les réseaux sociaux exploitent notre système de récompense cérébrale en nous fournissant des gratifications instantanées, comme les “likes” et les notifications. Chaque nouvelle notification stimule la production de dopamine, un neurotransmetteur lié au plaisir, ce qui renforce la dépendance.`;
  
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
    question: "Les réseaux sociaux libèrent de la dopamine dans :",
    options: ["Le circuit de récompense du cerveau", "La partie du cerveau dédiée au sommeil", "Les muscles", "Le système digestif"],
    correct: 0,
  },
  {
    question: "Pourquoi la dopamine est-elle appelée “hormone du plaisir” ?",
    options: ["Parcequ'elle favorise la détente", "Parcequ'elle réduit le stress", "Parcequ'elle aide à mieux dormir", "Parcequ'elle est associé à des récompenses immédiates"],
    correct: 3,
  },
  {
    question: "Le “circuit de récompense” est activé par :",
    options: ["Les taches répétitives", "L'exposition à la lumière bleue", "Les likes et partages sur les réseaux sociaux", "La consommation d'aliments sucrés"],
    correct: 2,
  },
  {
    question: "Quelle est la conséquence d’une surstimulation du circuit de récompense ?",
    options: ["Une dépendance aux réseaux sociaux", "Une amélioration de la mémoire", "Une augmentation du sommeil profond", "Une meilleure gestion du stress"],
    correct: 0,
  },
  {
    question: "Comment éviter la dépendance à la dopamine ?",
    options: [
      "En augmentant les notifications",
      "En réduisant l'utilisation des écrans",
      "En suivant plus d'influenceurs",
      "En pratiquant des activités hors ligne",
    ],
    correct: 3,
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