export interface CartoonCharacter {
  id: string
  name: string
  show: string
  imageUrl: string
}

export const cartoonCharacters: CartoonCharacter[] = [
  {
    id: "spongebob",
    name: "SpongeBob SquarePants",
    show: "SpongeBob SquarePants",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png"
  },
  {
    id: "bugs-bunny",
    name: "Bugs Bunny",
    show: "Looney Tunes",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Bugs_Bunny.svg"
  },
  {
    id: "mickey-mouse",
    name: "Mickey Mouse",
    show: "Disney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"
  },
  {
    id: "homer-simpson",
    name: "Homer Simpson",
    show: "The Simpsons",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
  },
  {
    id: "scooby-doo",
    name: "Scooby-Doo",
    show: "Scooby-Doo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Scooby-Doo.png"
  },
  {
    id: "tom",
    name: "Tom",
    show: "Tom and Jerry",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png"
  },
  {
    id: "jerry",
    name: "Jerry",
    show: "Tom and Jerry",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
  },
  {
    id: "pikachu",
    name: "Pikachu",
    show: "Pokemon",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"
  },
  {
    id: "goku",
    name: "Goku",
    show: "Dragon Ball",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/GokumangaDBZ.png"
  },
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    show: "Naruto",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png"
  },
  {
    id: "finn",
    name: "Finn the Human",
    show: "Adventure Time",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Finn_the_Human.png"
  },
  {
    id: "bart-simpson",
    name: "Bart Simpson",
    show: "The Simpsons",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
  },
  {
    id: "patrick-star",
    name: "Patrick Star",
    show: "SpongeBob SquarePants",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg"
  },
  {
    id: "daffy-duck",
    name: "Daffy Duck",
    show: "Looney Tunes",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Daffy_Duck.svg"
  },
  {
    id: "shrek",
    name: "Shrek",
    show: "Shrek",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
  }
]

export function getRandomCharacters(count: number, exclude?: string): CartoonCharacter[] {
  const available = exclude 
    ? cartoonCharacters.filter(c => c.id !== exclude)
    : [...cartoonCharacters]
  
  const shuffled = available.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function generateQuestion(): {
  character: CartoonCharacter
  options: string[]
} {
  const shuffled = [...cartoonCharacters].sort(() => Math.random() - 0.5)
  const character = shuffled[0]
  
  const wrongOptions = shuffled
    .slice(1, 4)
    .map(c => c.name)
  
  const options = [character.name, ...wrongOptions].sort(() => Math.random() - 0.5)
  
  return { character, options }
}
