// Effet d'écriture automatique (texte long)
document.addEventListener("DOMContentLoaded", () => {
  const text = `De nombreux contenus sur les réseaux sociaux contribuent à l’hypersexualisation, notamment à travers des images ou vidéos où le corps est exposé de manière sexualisée. Cela peut avoir des effets dévastateurs sur la perception de soi et la construction de l’identité, en particulier chez les adolescents. L'accès facile et non controler des sites pornographiques a permis de démocratiser ce genre d'images qui se sont petit à petit immiscer sur les réseaux sociaux. Au fil du temps les contenus ont évoluer et on retrouve de plus en plus d'images plus ou moins explicite mais toutes avec un caractère sexuel. Les conséquences de se genre d'images à longueur de journée est la dégradation de l'image de soi et les personnes qui y sont confrontés très tot finissent par adopter les comportements observés sur ces images, en s'hypersexualisant ou en ayant des pratiques sexuelles déviantes.`;
  
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
    question: "Qu’est-ce que l’hypersexualisation ?",
    options: [
"Une tendance à s’habiller confortablement et modestement","Une campagne de sensibilisation sur l’amour-propre","Une méthode pour apprendre à mieux s’exprimer","La valorisation excessive de l’apparence et de la sexualité, parfois au détriment des autres qualités"
],
    correct: 3,
  },
  {
    question: "Comment l’hypersexualisation se manifeste-t-elle sur les réseaux sociaux ?",
    options: ["Par des contenus éducatifs sur la santé sexuelle","Par des publications qui promeuvent des discussions philosophiques","Par des articles sur la nutrition","Par des photos et vidéos mettant l’accent sur l’apparence physique ou des comportements sexualisés"],
    correct: 3,
  },
  {
    question: "Comment lutter contre l’hypersexualisation sur les réseaux sociaux ?",
    options: [
"En partageant uniquement des photos retouchées","En publiant des vidéos conformes aux tendances populaires","En suivant des comptes promouvant des contenus variés et positifs","En évitant complètement les réseaux sociaux"
],
    correct: 2,
  },
  {
    question: "Quel est l’impact de l’hypersexualisation sur les jeunes ?",
    options: [
"Une diminution de l’estime de soi et une pression pour se conformer à des standards irréalistes","Une augmentation de la confiance en soi","Une meilleure compréhension des relations saines","Une motivation à éviter les réseaux sociaux"
],
    correct: 0,
  },
  {
    question: "Pourquoi l’hypersexualisation sur les réseaux est-elle problématique ?",
    options: [
     "Parce qu’elle encourage des débats publics ouverts","Parce qu’elle réduit souvent les personnes à leur apparence physique au lieu de leurs compétences ou valeurs","Parce qu’elle empêche de publier des photos d’animaux","Parce qu’elle limite les interactions entre abonnés"
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