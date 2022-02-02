const speakers = [
  {
    name: "Boruto's Father",
    description: '7th Hokage. Sutch a cool guy. I hope they make a spin off about him.',
    lecture: 'Global Summit Start Speech',
    id: 1,
    imageUrl: './assets/speakers/Naruto.png',
    imageAlt: 'Uzumaki Naruto from Naruto',
  },
  {
    name: 'Saitama',
    description: 'Defeats anyone with ONE PUNCH. Even powerful aliens.',
    lecture: 'How to train untill you go bald',
    id: 2,
    imageUrl: './assets/speakers/saitama.jpg',
    imageAlt: 'Saitama from One Punch Man',
  },
  {
    name: 'Kirito',
    description: 'The main protagonist of Sword Art Online, he is one of SAO beta testers',
    lecture: 'How to dual wield workshop',
    id: 3,
    imageUrl: './assets/speakers/kirito.jpg',
    imageAlt: 'Kirito from SAO',
  },
  {
    name: 'Erina Nakiri',
    description: "Has the best palate in the world, 'God's Tongue'. Member of Elite Ten",
    lecture: "Hell's kitchen anime version",
    id: 4,
    imageUrl: './assets/speakers/erina.jfif',
    imageAlt: 'Erina Nakiri from Shokugeki no Souma',
  },
  {
    name: 'Rimuru Tempest',
    description: 'Rimuru is the founder and King of the Jura Tempest Federation.',
    lecture: 'Leadership: How to befriend all races.',
    id: 5,
    imageUrl: './assets/speakers/rimuru.jpg',
    imageAlt: 'Rimuru Tempest from That time I;ve reincarnated as a Slime',
  },
  {
    name: 'Violet Evergarden',
    description: 'Ex elite combatant, works as an Auto Memory Doll to CH Postal.',
    lecture: "The meaning of the words 'I love you'.",
    id: 6,
    imageUrl: './assets/speakers/violet.jpg',
    imageAlt: 'Violet Evergarden, from violet evergarden',
  },
];

const cardsSection = document.getElementById('cardsSection');

function generateHTML(details) {
  const template = `
    <div class="card-wrapper">
        <div class="speaker-card shadow-lg rounded">
            <div>
                <img class="speaker-image" src="${details.imageUrl}" alt=${details.imageAlt}>
            </div>
            <div class="speaker-content">
                <h2>${details.name}</h2>
                <h3>${details.description}</h3>
                <hr>
                <p>${details.lecture}</p>
            </div>
        </div>
    </div>
  `;
  return template;
}

// eslint-disable-next-line array-callback-return
speakers.map((speaker) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(speaker);
  cardsSection.appendChild(HTMLElement);
});