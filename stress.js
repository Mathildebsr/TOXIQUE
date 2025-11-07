// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les réseaux sociaux sont souvent source de stress et peuvent déclencher des troubles de l’humeur et de la dépression. L’exposition constante à des contenus négatifs, aux comparaisons sociales et aux événements stressants peut avoir un effet délétère sur la santé mentale. De plus, la validation sociale par les “likes” crée une dépendance émotionnelle qui peut provoquer un sentiment d’insécurité.`;
  
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
    question: "Les réseaux sociaux peuvent-ils contribuer à l’augmentation du stress ?",
    options: ["Non, ils permettent uniquement de se détendre", "Oui, en créant des attentes irréalistes", "Oui, en augmentant l'exposition à des contenus anxiogènes", "Non, ils réduisent l'isolement social"],
    correct: 1,
  },
  {
    question: "Quel symptôme peut être aggravé par une utilisation excessive des réseaux sociaux ?",
    options: ["La confiance en soi", "L'anxiété sociale", "L'amélioration des relations", "La qualité du sommeil"],
    correct: 1,
  },
  {
    question: "3.	Les réseaux sociaux peuvent être un facteur de :",
    options: ["Résilience face à la dépréssion", "Gestion optimale du stress", "Réduction des troubles de l'humeur", "Développement d'une image corporelle négative"],
    correct: 3,
  },
  {
    question: "Quel comportement peut réduire l’impact des réseaux sociaux sur la santé mentale ?",
    options: ["Suivre un plus grand nombre d’influenceurs","Poster plus régulièrement des photos personnelles",
"Définir une limite de temps d’utilisation quotidienne","Désactiver son compte temporairement"],
    correct: 2,
  },
  {
    question: "Les notifications constantes des réseaux sociaux :",
    options: [
      "Peuvent provoquer une surcharge cognitive",
      "Favorisent une meilleure concentration",
"Réduisent le niveau de stress",
"N’ont aucun impact sur l’humeur"
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