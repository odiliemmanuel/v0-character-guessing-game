export const characters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png",
    show: "SpongeBob SquarePants"
  },
  {
    id: 2,
    name: "Mickey Mouse",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png",
    show: "Mickey Mouse"
  },
  {
    id: 3,
    name: "Pikachu",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png",
    show: "Pokemon"
  },
  {
    id: 4,
    name: "Bugs Bunny",
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/Bugs_Bunny.svg",
    show: "Looney Tunes"
  },
  {
    id: 5,
    name: "Goku",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/GokuAnime.png",
    show: "Dragon Ball"
  },
  {
    id: 6,
    name: "Tom",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png",
    show: "Tom and Jerry"
  },
  {
    id: 7,
    name: "Jerry",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
    show: "Tom and Jerry"
  },
  {
    id: 8,
    name: "Scooby-Doo",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Scooby-Doo.png",
    show: "Scooby-Doo"
  },
  {
    id: 9,
    name: "Patrick Star",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png",
    show: "SpongeBob SquarePants"
  },
  {
    id: 10,
    name: "Shrek",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
    show: "Shrek"
  },
  {
    id: 11,
    name: "Naruto Uzumaki",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png",
    show: "Naruto"
  },
  {
    id: 12,
    name: "Bart Simpson",
    image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    show: "The Simpsons"
  },
  {
    id: 13,
    name: "Homer Simpson",
    image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    show: "The Simpsons"
  },
  {
    id: 14,
    name: "Elsa",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Elsa_from_Disney%27s_Frozen.png",
    show: "Frozen"
  },
  {
    id: 15,
    name: "Woody",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Woody_%28Toy_Story%29.png",
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
