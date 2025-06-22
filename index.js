// STRINGS
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructure animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse is gone — get 4 animals by name
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Chicken (little) went back — get 3 animals by color
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// ARRAYS
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure by color name
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure by initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Isolate indigo using indg
const [, , , , , indg] = colors;

// OBJECTS

// 7. Destructure all properties from muppet object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nested properties (songs 2 & 4, job and partner)
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
