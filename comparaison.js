// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `Les influenceurs créent souvent des images idéalisées de leur vie et de leur corps, générant des attentes irréalistes chez leurs abonnés. Cela peut nuire à l’estime de soi, en particulier chez les jeunes qui comparent leur quotidien à ces versions filtrées de la réalité. On observe une recrudescence de trouble du comportement alimentaire & de dismorphie ( un trouble où l'image de soi est complètemetn déformer de la réalité ), tout cela est du aux filtres et retouches utilisés par les influenceurs afin de montrer une image parfaite d'eux meme, laissant un sentiment de mal etre chez les jeunes pensant qu'il s'agit d'une réalité qu'ils n'arrivent pas à atteindre.`;
  
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
    question: "Pourquoi les réseaux sociaux encouragent-ils les comparaisons toxiques ?",
    options: [
"Parce qu’ils favorisent des discussions ouvertes et honnêtes",
"Parce qu’ils valorisent uniquement le contenu éducatif",
      "Parce qu’ils montrent souvent des vies idéalisées et irréalistes",
"Parce qu’ils interdisent tout contenu publicitaire"],
    correct: 2,
  },
  {
    question: "Quel impact les comparaisons toxiques peuvent-elles avoir sur la santé mentale ?",
    options: [
"Une baisse de la confiance en soi et un sentiment d’insatisfaction","Une augmentation de l’estime de soi",
"Une meilleure compréhension de ses objectifs personnels",
"Une neutralité totale face aux publications"],
    correct: 0,
  },
  {
    question: "Les comparaisons sur les réseaux sociaux sont souvent basées sur :",
    options: ["Des expériences authentiques et spontanées",
"Des analyses approfondies de la vie des autres",
"Une évaluation juste et équilibrée des situations","Des images et récits filtrés ou retouchés"],
    correct: 3,
  },
  {
    question: "Quelle stratégie peut aider à réduire les comparaisons toxiques ?",
    options: [
"Suivre davantage d’influenceurs célèbres","Limiter le temps passé sur les réseaux sociaux",
"Réagir négativement aux publications des autres",
"Regarder uniquement les tendances populaires"],
    correct: 1,
  },
  {
    question: "Une conséquence fréquente des comparaisons toxiques est :",
    options: [
     "Une satisfaction accrue de sa propre vie",
"Une amélioration des compétences sociales",
      "Une dévalorisation de soi et des comportements compensatoires",
"Une motivation accrue pour atteindre ses objectifs"
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