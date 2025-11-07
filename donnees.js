// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les entreprises qui possèdent des réseaux sociaux récoltent des informations personnelles de leurs utilisateurs, ce qui pose des problèmes de confidentialité et de sécurité des données. En effet, quelque soit le site ou le réseaux social sur lequel vous naviguez, ils récoltent un maximum d'informations à votre sujet, votre identité mais aussi vos préférences mais parfois cela tourne à la dérive quant il s'agit de vos informations bancaires ou de vos dossiers médicaux. Ces informations sont ensuite vendu et utilisé par les entreprises pour vous ciblé notamment pour des publicité. Malheureusement on assite de plus en plus à des fuites de données et celle ci se retrouve ensuite revendu sur le darkweb et tombent entre les mains de personnes mal intentionné. `;
  
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
    question: "Que signifie la récolte de données sur les réseaux sociaux ?",
    options: [
 "Le téléchargement des photos des utilisateurs",
      "La collecte d’informations personnelles des utilisateurs par les plateformes",
"L’archivage des anciens contenus partagés",
"La suppression automatique des anciennes données"],
    correct: 1,
  },
  {
    question: "Pourquoi les entreprises collectent-elles des données personnelles ?",
    options: ["Pour mieux cibler leurs publicités et produits",
"Pour réduire leur nombre d’utilisateurs",
"Pour partager ces données gratuitement avec tout le monde",
"Pour limiter l’utilisation des réseaux sociaux"],
    correct: 0,
  },
  {
    question: "Comment limiter la collecte de vos données personnelles ?",
    options: [
"En ajustant les paramètres de confidentialité et en limitant les permissions accordées",
      "En partageant un maximum de données pour brouiller les pistes",
"En utilisant plusieurs comptes sur la même plateforme",
"En désactivant son compte uniquement la nuit"],
    correct: 0,
  },
  {
    question: "Les cookies sur les sites web servent à :",
    options: [
"Empêcher l’accès aux contenus en ligne","Collecter des informations sur vos préférences et votre navigation",
"Supprimer automatiquement vos données personnelles",
"Améliorer la sécurité des réseaux sociaux"],
    correct: 1,
  },
  {
    question: "Pourquoi est-il risqué de partager trop d’informations personnelles en ligne ?",
    options: [
"Cela réduit votre visibilité sur les réseaux sociaux","Cela peut entraîner des vols d’identité ou une utilisation abusive de vos données",
"Cela diminue la rapidité des plateformes",
"Cela rend vos comptes inutilisables"
    ],
    correct: 1,
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