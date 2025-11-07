// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les écrans des smartphones et autres appareils émettent une lumière bleue qui peut interférer avec notre cycle de sommeil en réduisant la production de mélatonine. Cette lumière peut également provoquer une fatigue oculaire et des troubles de la vision, ce qui aggrave encore le manque de sommeil.`;
  
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
    question: "La lumière bleue des écrans bloque la production de quelle hormone essentielle au sommeil ?",
    options: ["Dopamine", "Mélatonine", "Cortisol", "Adrénaline"],
    correct: 1,
  },
  {
    question: "Quel dispositif peut réduire l’effet de la lumière bleue la nuit ?",
    options: ["Un filtre lumière bleue", "Une lumière LED", "Une appli de réglage d'écran", "Le écran plus grand"],
    correct: 0,
  },
  {
    question: "La lumière bleue affecte particulièrement :",
    options: ["La durée des reves", "Le temps d'endormissement", "La qualité du sommeil profond", "L'appétit nocturne"],
    correct: 1,
  },
  {
    question: "Les lunettes anti-lumière bleue sont-elles efficaces ?",
    options: ["Non, elles n'ont aucun effet prouvé", "Seulement pour les gamers", "Oui, elles réduisent l'exposition", "Oui, mais uniquement la journée"],
    correct: 2,
  },
  {
    question: "Pourquoi les écrans stimulent-ils le cerveau ?",
    options: [
      "A cause du contenue visuel rapide",
      "En raison du son qu'ils émettent",
      "Parcequ'ils sollicitent le circuit de récompense",
      "A cause de la lumière bleue",
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