// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Le cyberharcèlement est un problème croissant sur les réseaux sociaux, où des individus peuvent être intimidés, menacés ou harcelés de manière anonyme. Les jeunes et les adolescents sont particulièrement vulnérables à l’exploitation par des prédateurs en ligne. Les commentaires négatifs se multiplie et la haine devient aujourd'hui un moyen de générer du clic et cela pousse les internautes à etre de plus en plus viruleux sur les réseaux sociaux.
De meme, les enfants concernés par le harcèlement scolaire, ne sont plus tranquille lorsqu'ils rentrent chez eux, car ils sont facilement atteignable depuis les réseaux sociaux.
En effet, avec la montée des réseaux sociaux, les prédateurs ont trouvés par la meme occasion un nouveau terrain de chasse.
Entre les applications de rencontres pour jeunes, les influenceurs aux dérives pédophiles et les réseaux sociaux, les enfants n'ont jamais été aussi facilement accessibles pour les personnes mal intentionnées.`;
  
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
    question: "Qu’est-ce que le cyberharcèlement ?",
    options: [
"Une discussion animée entre amis",
"Une méthode pour signaler un compte suspect","Une forme de harcèlement qui se produit en ligne via messages, commentaires ou menaces",
"Une tendance populaire sur les réseaux sociaux"],
    correct: 2,
  },
  {
    question: "Quel est un signe d’un comportement prédateur en ligne ?",
    options: [
"Un simple « like » sur une publication",
"Une question sur un contenu partagé",
      "Une insistance à demander des informations personnelles ou des rencontres en secret",
"Une discussion publique dans les commentaires"],
    correct: 2,
  },
  {
    question: "Quelle est la meilleure façon de réagir au cyberharcèlement ?",
    options: [
"Ignorer les messages et continuer à interagir","Bloquer la personne et signaler son comportement à la plateforme",
"Répondre directement à l’agresseur",
"Partager les messages avec d’autres utilisateurs"],
    correct: 1,
  },
  {
    question: "Comment prévenir le cyberharcèlement ?",
    options: [
"En répondant rapidement à tous les messages suspects",
"En partageant toutes ses informations personnelles pour paraître honnête",
"En évitant complètement les réseaux sociaux","En utilisant des paramètres de confidentialité renforcés et en limitant les contacts inconnus"],
    correct: 3,
  },
  {
    question: "Que faire si un prédateur en ligne essaie de vous manipuler ?",
    options: [
    
"Supprimer immédiatement votre compte sans signaler",
"Essayer de négocier avec la personne","Ne pas répondre, signaler l’utilisateur et en parler à une personne de confiance",
"Ignorer complètement la situation"
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