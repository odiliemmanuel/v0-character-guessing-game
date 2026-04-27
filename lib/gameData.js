export const characters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    image: "/characters/spongebob.jpg",
    show: "SpongeBob SquarePants"
  },
  {
    id: 2,
    name: "Mickey Mouse",
    image: "/characters/mickey-mouse.jpg",
    show: "Mickey Mouse"
  },
  {
    id: 3,
    name: "Pikachu",
    image: "/characters/pikachu.jpg",
    show: "Pokemon"
  },
  {
    id: 4,
    name: "Bugs Bunny",
    image: "/characters/bugs-bunny.jpg",
    show: "Looney Tunes"
  },
  {
    id: 5,
    name: "Goku",
    image: "/characters/goku.jpg",
    show: "Dragon Ball"
  },
  {
    id: 6,
    name: "Tom",
    image: "/characters/tom.jpg",
    show: "Tom and Jerry"
  },
  {
    id: 7,
    name: "Jerry",
    image: "/characters/jerry.jpg",
    show: "Tom and Jerry"
  },
  {
    id: 8,
    name: "Scooby-Doo",
    image: "/characters/scooby-doo.jpg",
    show: "Scooby-Doo"
  },
  {
    id: 9,
    name: "Patrick Star",
    image: "/characters/patrick-star.jpg",
    show: "SpongeBob SquarePants"
  },
  {
    id: 10,
    name: "Shrek",
    image: "/characters/shrek.jpg",
    show: "Shrek"
  },
  {
    id: 11,
    name: "Naruto Uzumaki",
    image: "/characters/naruto.jpg",
    show: "Naruto"
  },
  {
    id: 12,
    name: "Bart Simpson",
    image: "/characters/bart-simpson.jpg",
    show: "The Simpsons"
  },
  {
    id: 13,
    name: "Homer Simpson",
    image: "/characters/homer-simpson.jpg",
    show: "The Simpsons"
  },
  {
    id: 14,
    name: "Elsa",
    image: "/characters/elsa.jpg",
    show: "Frozen"
  },
  {
    id: 15,
    name: "Woody",
    image: "/characters/woody.jpg",
    show: "Toy Story"
  }
];

// Shuffle array utility
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate wrong options for multiple choice
export function generateOptions(correctCharacter, allCharacters) {
  const wrongCharacters = allCharacters.filter(c => c.id !== correctCharacter.id);
  const shuffledWrong = shuffleArray(wrongCharacters).slice(0, 3);
  const options = [...shuffledWrong.map(c => c.name), correctCharacter.name];
  return shuffleArray(options);
}
