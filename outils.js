// Configuration des outils
const config = {
  timeLimit: { enabled: false, limit: 600 },
  breakReminder: { enabled: false, interval: 300 },
  grayscale: { enabled: false, trigger: 500 },
  filterNegative: { enabled: false },
  blueLight: { enabled: false },
  scamProtection: { enabled: false },
  predatorProtection: { enabled: false },
};

// Gestion des outils activables
function openTool(tool) {
  if (!config[tool]) {
    alert("Cet outil n'existe pas !");
    return;
  }

  config[tool].enabled = !config[tool].enabled;

  alert(
    `${tool} ${
      config[tool].enabled ? "activé" : "désactivé"
    }`
  );

  if (tool === "blueLight" && config[tool].enabled) {
    document.body.style.filter = "brightness(80%) hue-rotate(180deg)";
  } else if (tool === "blueLight" && !config[tool].enabled) {
    document.body.style.filter = "none";
  }
}

// Filtrage des mots pour les outils spécifiques
setInterval(() => {
  if (config.filterNegative.enabled) {
    replaceWords(["haine", "toxique", "mauvais"], "****");
  }
  if (config.scamProtection.enabled) {
    replaceWords(["arnaque", "escroquerie", "phishing"], "[ALERTE ARNAQUE]");
  }
  if (config.predatorProtection.enabled) {
    replaceWords(["rencontre", "mineur", "danger"], "[PRÉVENTION]");
  }
}, 2000);

// Fonction de remplacement des mots
function replaceWords(words, replacement) {
  document.body.querySelectorAll("*").forEach((node) => {
    if (node.innerText) {
      words.forEach((word) => {
        node.innerHTML = node.innerHTML.replace(new RegExp(word, "gi"), replacement);
      });
    }
  });
}