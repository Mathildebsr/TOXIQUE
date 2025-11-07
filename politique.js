// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les influenceurs jouent un rôle de plus en plus important dans les débats politiques. Cependant, leurs messages peuvent être biaisés, manipulés, et parfois même influencer des élections ou des décisions publiques. En effet, les politiques l'ont bien compris, les communautés d'influenceurs sont jeunes et influencable, ils prennent souvent ce qui est dit pour acquis lorsqu'ils adulent une personnalité. Ils instrumentalisent alors ces influenceurs en utilisant leurs canaux pour communiquer, via des vidéos en collaborations et parfois en les payants pour les soutenir publiquement. Parfois, ce sont les influenceurs eux meme qui prennent partie, en se positionnant contre la montée de l'extreme droite comme l'a fait squeezie aux dernières éléctions ou bien en tenant des propos la soutenant comme TiboInShape ou encore Thais d'Escufon.`;
  
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
    question: "Les influenceurs peuvent influencer la politique en :",
    options: ["Partageant leurs opinions personnelles et orientant leurs abonnés",
"Restant toujours neutres et apolitiques",
"Empêchant la diffusion d’informations politiques",
"Rejetant systématiquement les débats politiques"],
    correct: 0,
  },
  {
    question: "Quel danger peut présenter l’influence politique des influenceurs ?",
    options: [
"Une meilleure compréhension des enjeux politiques",
"Une neutralité accrue des débats publics",
"Un renforcement de la pensée critique des abonnés","La diffusion d’informations biaisées ou fausses"],
    correct: 3,
  },
  {
    question: "Pourquoi les marques ou partis politiques collaborent-ils parfois avec des influenceurs ?",
    options: [
"Pour s’éloigner des plateformes numériques",
      "Pour atteindre un public plus jeune et engagé",
"Pour éviter toute promotion politique directe",
"Pour réduire l’impact des réseaux sociaux"],
    correct: 1,
  },
  {
    question: "Les influenceurs qui parlent de politique sont-ils toujours transparents ?",
    options: [
"Oui, tous déclarent leurs intérêts personnels","Non, mais ils évitent de discuter de sujets sensibles","Non, certains ne révèlent pas leurs partenariats rémunérés",
"Oui, car ils sont réglementés par la loi"],
    correct: 2,
  },
  {
    question: "Comment les utilisateurs peuvent-ils éviter d’être manipulés politiquement par des influenceurs ?",
    options: [
"En suivant uniquement les influenceurs qui partagent leurs opinions",
"En regardant uniquement des contenus humoristiques",
      "En vérifiant les sources des informations partagées",
"En partageant automatiquement toutes les publications politiques"
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