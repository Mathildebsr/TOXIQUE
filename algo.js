// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les algorithmes des réseaux sociaux sont conçus pour rendre l’expérience encore plus addictive. Ils analysent les préférences de l’utilisateur et lui proposent du contenu de plus en plus personnalisé, le rendant difficile de décrocher. Le principe de l'algorithme en lui meme est de rendre le contenu de chaque utilisateur unique et de proposer une expérience personnalisé. Là où commence la dérive, c'est quand l'utilisateur est tellement absorber qu'il ne peu plus décrocher, créant une dépendance.`;
  
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
    question: "Quel est le rôle principal des algorithmes sur les réseaux sociaux ?",
    options: ["Organiser et personnaliser le contenu de chaque utilisateur", "Réduire le temps passé sur les plateformes", "Bloquer les contenus sponsorisés", "Protéger les utilisateurs contre la désinformation"],
    correct: 0,
  },
  {
    question: "Quels types de contenus les algorithmes mettent généralement en avant ?",
    options: ["Tous les contenus publiés par vos amis", "Les contenus récents et pertinents pour l'utilisateur", "Uniquement les contenus payants", "Les contenus éducatifs"],
    correct: 1,
  },
  {
    question: "Pourquoi les algorithmes favorisent-ils les contenus qui génèrent des émotions fortes ?",
    options: ["Pour promouvoir une utilisation saine des utilisateurs", "Pour limiter le temps passé sur les plateformes", "Parcequ'ils augmentent l'engagement des utilisateurs", "Parcequ'ils sont controlés par des psychologues"],
    correct: 2,
  },
  {
    question: "Quels facteurs influencent les algorithmes des réseaux sociaux ?",
    options: ["Les données aléatoires", "Le nombre de comptes créés sur la plateforme", "La consommation d'énergie des serveurs", "Les intéractions, le temps passé et les préférences utilisateur"],
    correct: 3,
  },
  {
    question: "Comment réduire l’influence des algorithmes sur son comportement ?",
    options: [
      "Utiliser plus souvent les réseaux sociaux",
      "Augmenter le nombre de likes sur chaque publication",
      "Suivre des comptes variés et limités les intéractions impulsives",
      "Regarder uniquement les contenus recommandés",
    ],
    correct: 2,
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