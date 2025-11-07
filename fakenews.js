// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les réseaux sociaux sont un terrain fertile pour la propagation de fausses informations, qu’il s’agisse de fake news, de théories du complot ou de deepfakes (vidéos truquées). Cela crée de la confusion et peut avoir des conséquences dramatiques, tant sur le plan politique que personnel. Aujourd'hui les comptes spécialisés en fakenews affluent de plus en plus, causant la confusion pour les personnes qui ne savent pas les reconnaitre. Les deepfake y contribuent énormément car ils deviennent des "preuves matériels", puisque souvent on ne croit que se qu'on voit. Certain réseaux comme Twitter (X), tentent de les contrer grace aux notes de communautés.`;
  
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
    question: "Qu’est-ce qu’une fake news ?",
    options: [
"Une nouvelle qui n’a pas encore été vérifiée",
      "Une information fausse ou trompeuse diffusée volontairement",
"Une rumeur entre amis",
"Une publicité exagérée"],
    correct: 1,
  },
  {
    question: "Que sont les deepfakes ?",
    options: ["Des vidéos modifiées grâce à l’intelligence artificielle pour créer des contenus trompeurs",
"Des images floues prises dans des conditions difficiles",
"Des vidéos professionnelles utilisées à des fins éducatives",
"Des fichiers contenant des données cachées"],
    correct: 0,
  },
  {
    question: "Pourquoi les deepfakes sont-ils dangereux ?",
    options: ["Ils améliorent la qualité des vidéos en ligne",
"Ils ne sont visibles que sur des plateformes privées","Ils peuvent être utilisés pour manipuler l’opinion publique et nuire à des individus","Ils sont toujours facilement détectables"],
    correct: 2,
  },
  {
    question: "Comment reconnaître une fake news ?",
    options: [
"En partageant immédiatement la nouvelle avec ses amis",
"En regardant uniquement le titre de l’article",
"En s’assurant qu’elle est publiée sur un réseau social","En vérifiant la source et en croisant les informations"
    ],
    correct: 3,
  },
  {
    question: "Quel outil peut être utile pour détecter un deepfake ?",
    options: [
     "Des logiciels de détection spécialisés ou des vérifications manuelles",
"Une simple recherche Google",
"Une discussion avec ses amis",
"Une application météo"
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