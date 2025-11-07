// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les réseaux sociaux sont conçus pour capter notre attention avec des flux infinis de contenu personnalisé. Ces algorithmes poussent les utilisateurs à faire défiler sans fin, ce qui perturbe le rythme circadien et entraîne des problèmes de sommeil. Le simple fait de s’exposer à des contenus stimulants avant le coucher peut inhiber la production de mélatonine, l’hormone du sommeil.`;
  
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
    question: "Pourquoi les algorithmes des réseaux sociaux favorisent-ils le scroll infini ?",
    options: ["Pour limiter l'ennui des utilisateurs", "Pour augmenter le temps passer sur l'appli", "Pour protéger votre santé mentale", "Pour réduire la consommation de contenu"],
    correct: 1,
  },
  {
    question: "Quel est l’impact principal du “scrolling” sur le sommeil ?",
    options: ["Il augmente la qualité du sommeil", "Il perturbe les cycles naturel du sommeil", "Il permet une meilleure récupération", "Il réduit les phases de reve"],
    correct: 1,
  },
  {
    question: "Quel neurotransmetteur est stimulé par les notifications pendant le scroll ?",
    options: ["La sérotonine", "L'adrénaline", "La dopamine", "La mélatonine"],
    correct: 2,
  },
  {
    question: "Les réseaux sociaux peuvent-ils causer de l’insomnie ?",
    options: ["Seulement chez les ados", "Non, ils n'ont aucun impact direct", "Oui, ils augmentent la stimulation mentale", "Non, ils aident à se détendre avant de dormir"],
    correct: 2,
  },
  {
    question: "Combien de temps avant de dormir est-il recommandé d’éviter les écrans ?",
    options: [
      "1 heure",
      "15 minutes",
      "3 heures",
      "30 minutes",
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