const zones = document.querySelectorAll(".zone");
const description = document.getElementById("description");

const descriptions = {
  vert: `
    <h2>Vert : Tout va bien</h2>
    <ul>
      <li>Je peux me passer de mon téléphone.</li>
      <li>Je profite avec mes amis et ma famille sans avoir besoin de poster.</li>
      <li>Je suis épanoui(e) même lorsque je n’ai pas mon téléphone.</li>
      <li>Je sais quand m’arrêter et je garde un bon équilibre avec mes écrans.</li>
    </ul>
  `,
  jaune: `
    <h2>Jaune : Attention, reste vigilant(e)</h2>
    <ul>
      <li>Je scroll à ne plus voir l’heure défiler.</li>
      <li>Je me soucie du regard des gens sur ce que je publie.</li>
      <li>Je ressens un petit stress quand je ne consulte pas mes notifications.</li>
      <li>Je passe plus de temps à regarder des influenceurs qu'à vivre mes propres moments.</li>
    </ul>
  `,
  orange: `
    <h2>Orange : Comportements à risque</h2>
    <ul>
      <li>Je suis souvent frustré(e) ou triste en me comparant à des influenceurs.</li>
      <li>Je cherche des "likes" pour me sentir mieux dans ma peau.</li>
      <li>Je reçois des commentaires blessants ou des moqueries.</li>
      <li>Je suis en contact avec un ami beaucoup plus vieux que moi via les réseaux.</li>
    </ul>
  `,
  rouge: `
    <h2>Rouge : Danger immédiat</h2>
    <ul>
      <li>Je reçois des commentaires violents ou menaçants.</li>
      <li>Je ne dors presque plus à cause des écrans ou des notifications.</li>
      <li>Je me sens obligé(e) de suivre des tendances dangereuses pour être accepté(e).</li>
      <li>Je subis du cyberharcèlement ou je suis exposé(e) à du contenu non souhaité.</li>
      <li>Je suis victime ou témoin de comportements inquiétants comme le revenge porn, des arnaques ou des prédateurs en ligne.</li>
    </ul>
  `,
};

zones.forEach((zone) => {
  zone.addEventListener("click", () => {
    const selectedZone = zone.getAttribute("data-zone");
    description.innerHTML = descriptions[selectedZone];
  });
});