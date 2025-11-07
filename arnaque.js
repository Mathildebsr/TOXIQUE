// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les influenceurs sont parfois impliqués dans des arnaques de marketing, en recommandant des produits ou services de manière non transparente. De plus, certains peuvent manipuler leurs abonnés pour promouvoir des idées ou des produits qui ne sont pas dans leur intérêt. La montée récente des influenceurs a fait par la meme occasion augmenter le nombre d'arnaques à cause de nombreux créateurs de contenu aux mauvaises motivations. Les produits dangereux, les formations, dissimulation de collaborations, promotions de casinos en ligne ou lives où ils mendient des cadeaux... les dérives sont de plus en plus nombreuses. La DGCCRF a épingler plusieurs de ses influenceurs pour leurs pratiques. A coter de ça certaines personnes se servent de l'image des influenceurs ou de stars pour arnaquer leur communauté via de faux comptes réclamant de l'argent sous prétexte de faux concours ou encore de fausses relations. `;
  
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
    question: "Comment les arnaques sur les réseaux sociaux se présentent-elles souvent ?",
    options: [
"En demandant des preuves d’identité pour accéder au compte",
"En offrant toujours un service gratuit sans contrepartie",
      "Sous forme de publicités ou messages promettant des gains rapides",
"En proposant des réductions sur des produits officiels"],
    correct: 2,
  },
  {
    question: "Quel est un signe courant d’une manipulation sur les réseaux ?",
    options: ["Une demande explicite d’arrêter d’utiliser les réseaux sociaux","Une offre ou promesse qui semble trop belle pour être vraie",
"Une promotion de contenus éducatifs uniquement",
"Une transparence totale sur l’objectif de la publication"],
    correct: 1,
  },
  {
    question: "Les influenceurs peu scrupuleux peuvent manipuler leur audience en :",
    options: [
"Fournissant des informations fiables et vérifiées",
"Encourant une consommation responsable","Promouvant des produits ou services douteux",
"Respectant l’éthique publicitaire"],
    correct: 2,
  },
  {
    question: "Comment se protéger des arnaques en ligne ?",
    options: [
"En cliquant sur tous les liens pour voir leur contenu",
      "En vérifiant les sources et la fiabilité des comptes",
"En suivant uniquement des influenceurs populaires",
"En achetant immédiatement les produits proposés"],
    correct: 1,
  },
  {
    question: "Quel réflexe adopter face à un message suspect ?",
    options: [
     "Ne pas répondre et le signaler à la plateforme", "Partager immédiatement le message avec ses contacts",
"Fournir ses coordonnées bancaires pour vérifier l’authenticité",
"Ignorer totalement les messages suspects"
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