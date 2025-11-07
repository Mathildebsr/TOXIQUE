// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Le revenge porn c'est le fait de publier des photos intimes plus communément appeler "nudes" ou des vidéos intimes, prise parfois à l'insu de la personne et de les diffusées sur les plateformes sociales à des fins de vengance le plus souvent après une rupture et ce sans le consentement de la personne concernée. Cela entraîne une violation grave de la vie privée et peut causer des traumatismes psychologiques importants pour les victimes. On observe alors un acharnement et du harcélement basé sur le Slut Shamming. Il s'agit bien évidemment d'une pratique illégale car il s'agit d'un viol du droit à la vie privée et du droit à l'image, la peine encouru est de 2 ans d'emprisonnement et de 60 000 euros d'amendes. Si vous en etes victime appelez le 3018.`;
  
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
    question: "Qu’est-ce que le revenge porn ?",
    options: [
"Une campagne publicitaire virale",
"Une vidéo humoristique partagée sur les réseaux sociaux",
      "La diffusion non consentie d’images intimes pour nuire à une personne",
"Un contenu artistique exposé en ligne"],
    correct: 2,
  },
  {
    question: "Pourquoi le revenge porn est-il illégal ?",
    options: [
"Parce qu’il est rarement diffusé",
"Parce qu’il n’est pas populaire sur les réseaux sociaux",
"Parce qu’il est difficile à réaliser","Parce qu’il viole le droit à la vie privée et à l’image"],
    correct: 3,
  },
  {
    question: "Quelle est une conséquence possible pour les victimes de revenge porn ?",
    options: [
"Une augmentation de leur estime de soi","Des troubles psychologiques comme l’anxiété et la dépression",
"Une meilleure reconnaissance sociale",
"Une amélioration de leurs relations personnelles"],
    correct: 1,
  },
  {
    question: "Comment se protéger contre le revenge porn ?",
    options: [
"Sauvegarder toutes ses photos sur un réseau social public","Éviter de partager des images intimes, même avec des proches","Ignorer complètement les menaces en ligne",
"Partager uniquement avec des influenceurs de confiance"],
    correct: 1,
  },
  {
    question: "Que faire si vous êtes victime de revenge porn ?",
    options: [
     "Signaler immédiatement les contenus et contacter les autorités compétentes",
"Ignorer les publications pour éviter d’y prêter attention",
"Répondre directement à la personne responsable",
"Supprimer son compte sur les réseaux sociaux"
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