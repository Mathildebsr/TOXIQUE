// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les réseaux sociaux peuvent avoir un impact négatif sur la concentration et la capacité à se concentrer sur des tâches académiques. Le système de récompense des réseaux sociaux favorise la recherche de gratification immédiate, ce qui peut perturber l’attention à long terme et accroître les symptômes du trouble déficitaire de l’attention avec ou sans hyperactivité (TDAH). IL est aujourd'hui courant , malheureusement, que les enfants ne puissent plus se concentrer suffisamment sur les cours pour assimiler correctement. L'impact des écrans dès le plus jeune age à un réel impact sur les capacités d'apprentissage, c'est d'ailleurs la raison pour laquelle Tiktok a été banni dans plusieurs pays, le gouvernement étant concerné par le niveau académique du pays.`;
  
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
    question: "Pourquoi le TDAH rend-il les réseaux sociaux particulièrement attractifs ?",
    options: [
      
"Parce qu’ils nécessitent de longs moments de concentration",
"Parce qu’ils favorisent la mémorisation",
"Parce qu’ils sont dépourvus de stimulation sensorielle",
      "Parce qu’ils offrent des récompenses rapides"
      ],
    correct: 3,
  },
  {
    question: "Quel effet le circuit de récompense peut-il avoir sur la motivation scolaire ?",
    options: ["L’encourager grâce à une gratification immédiate",
"La diminuer en favorisant les distractions",
"L’améliorer sur le long terme",
"La stabiliser"],
    correct: 1,
  },
  {
    question: "Les notifications fréquentes des réseaux sociaux peuvent :",
    options: [
      "Réduire la capacité de concentration","Améliorer la mémoire à long terme",
"Augmenter les performances académiques",
"Être ignorées facilement"],
    correct: 0,
  },
  {
    question: "Quels types de contenus stimulent le plus le circuit de récompense chez les jeunes ?",
    options: ["Les tutoriels éducatifs",
"Les longs articles de blogs",
              "Les vidéos courtes et divertissantes",
"Les documentaires"],
    correct: 2,
  },
  {
    question: "Quelle solution est recommandée pour réduire l’impact des écrans sur la mémoire ?",
    options: [
      "Travailler avec des sessions chronométrées",
"Augmenter la luminosité de l’écran",
"Consulter les réseaux sociaux en parallèle des études",
"Réaliser plusieurs tâches à la fois"
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