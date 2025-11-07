// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `La peur de manquer quelque chose (FOMO) est un phénomène souvent exacerbé par les réseaux sociaux. Les utilisateurs sont constamment connectés pour ne rien rater, ce qui peut les conduire à vérifier sans cesse leur téléphone. Cela génère du stress et une dépendance, créant un cercle vicieux.`;
  
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
    question: "Que signifie l’acronyme FOMO ?",
    options: ["Fear of Missing Out", "Fear of Modern Options", "Feelings of Missing Others", "Freedom of Making Options"],
    correct: 0,
  },
  {
    question: "Le FOMO est souvent lié à :",
    options: ["Une déconnexion sociale", "Une surexposition aux réseaux sociaux", "Un manque de confiance en soi", "Une meilleure gestion du temps"],
    correct: 1,
  },
  {
    question: "Quel symptôme est associé au FOMO ?",
    options: ["Un sentiment d'urgence constant", "Une amélioration de l'estime de soi", "Une peur de rater des opportunités", "Une meilleure concentration"],
    correct: 2,
  },
  {
    question: "Le FOMO peut-il causer du stress chronique ?",
    options: ["Oui, en augmentant l'anxiété sociale", "Non, c'est un phénomène passager", "Seulement chez les jeunes", "Non, il réduit le stress"],
    correct: 0,
  },
  {
    question: "Quelle action réduit efficacement le FOMO ?",
    options: [
      "Désactiver les notifications",
      "Passer plus de temps sur les réseaux sociaux",
      "Se forcer à suivre les tendances",
      "Réduire son temps d'écran",
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