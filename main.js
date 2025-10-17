// //  Pick 5 questions that give personality, style, or vibes to the name

// // Favorite element or nature thing: Fire, Water, Wind, Earth, Lightning
// // Favorite animal: Tiger, Wolf, Eagle, Snake, Panther
// // Favorite color or vibe: Red, Black, Gold, Silver, Shadow
// // Favorite city or place
// // Pick a style word: Master, Ghost, Kid, Assassin, Dragon
// document.querySelector("button").addEventListener("click",


// const elements = {
//   Fire: ["Flame", "Blaze", "Inferno"],
//   Water: ["Wave", "Tide", "Splash"],
//   Wind: ["Storm", "Breeze", "Cyclone"],
//   Earth: ["Rock", "Stone", "Mud"],
//   Lightning: ["Bolt", "Thunder", "Shock"]
// };

// const animals = {
//   Tiger: ["Tiger", "Panther", "Lion"],
//   Wolf: ["Wolf", "Hound", "Jackal"],
//   Eagle: ["Eagle", "Hawk", "Falcon"],
//   Snake: ["Serpent", "Cobra", "Viper"],
//   Panther: ["Shadow", "Night", "Stealth"]
// };

// const color = {
//   Red: ["Crimson", "Scarlet", "Ruby"],
//   Black: ["Onyx", "Obsidian", "Raven"],
//   Gold: ["Gilded", "Treasure", "Crown"],
//   Silver: ["Steel", "Chrome", "Frost"],
//   Shadow: ["Shade", "Midnight", "Eclipse"]
// };

// const city = {
//   Boston: ["Bean", "Harbor", "Fenway"],
//   NewYork: ["Empire", "Brooklyn", "Harlem"],
//   Philly: ["Liberty", "Cheesesteak", "Broad"],
//   Miami: ["Heat", "Ocean", "Sunshine"]
// };

// const style = {
//   Master: ["Sensei", "Guru", "Chief"],
//   Ghost: ["Phantom", "Shade", "Specter"],
//   Kid: ["Prodigy", "Rookie", "Youngblood"],
//   Assassin: ["Blade", "Shadow", "Venom"],
//   Dragon: ["Fireheart", "Scales", "Skyfang"]
// };

// function pickRandomWord(list) {
//   return list[Math.floor(Math.random() * list.length)];
// }


// const userAnswer1 = "Fire";
// const userAnswer2 = "Wolf";
// const userAnswer3 = "Gold";
// const userAnswer4 = "Miami";
// const userAnswer5 = "Ghost";

// const wuTangName =
//   pickRandomWord(elements[userAnswer1]) + " " +
//   pickRandomWord(animals[userAnswer2]) + " " +
//   pickRandomWord(color[userAnswer3]) + " " +
//   pickRandomWord(city[userAnswer4]) + " " +
//   pickRandomWord(style[userAnswer5]);




// ran through AI to see why it wasnt working
//very close — the main issue is that your event listener isn’t complete, 
// and the code inside it never runs when the button is clicked.



const elements = {
  Fire: ["Flame", "Blaze", "Inferno"],
  Water: ["Wave", "Tide", "Splash"],
  Wind: ["Storm", "Breeze", "Cyclone"],
  Earth: ["Rock", "Stone", "Mud"],
  Lightning: ["Bolt", "Thunder", "Shock"]
};

const animals = {
  Tiger: ["Tiger", "Panther", "Lion"],
  Wolf: ["Wolf", "Hound", "Jackal"],
  Eagle: ["Eagle", "Hawk", "Falcon"],
  Snake: ["Serpent", "Cobra", "Viper"],
  Panther: ["Shadow", "Night", "Stealth"]
};

const color = {
  Red: ["Crimson", "Scarlet", "Ruby"],
  Black: ["Onyx", "Obsidian", "Raven"],
  Gold: ["Gilded", "Treasure", "Crown"],
  Silver: ["Steel", "Chrome", "Frost"],
  Shadow: ["Shade", "Midnight", "Eclipse"]
};

const city = {
  Boston: ["Bean", "Harbor", "Fenway"],
  NewYork: ["Empire", "Brooklyn", "Harlem"],
  Philly: ["Liberty", "Cheesesteak", "Broad"],
  Miami: ["Heat", "Ocean", "Sunshine"]
};

const style = {
  Master: ["Sensei", "Guru", "Chief"],
  Ghost: ["Phantom", "Shade", "Specter"],
  Kid: ["Prodigy", "Rookie", "Youngblood"],
  Assassin: ["Blade", "Shadow", "Venom"],
  Dragon: ["Fireheart", "Scales", "Skyfang"]
};

function pickRandomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

document.querySelector("button").addEventListener("click", function() {
  // Replace these with actual user inputs later
  const userAnswer1 = "Fire";
  const userAnswer2 = "Wolf";
  const userAnswer3 = "Gold";
  const userAnswer4 = "Miami";
  const userAnswer5 = "Ghost";

  const wuTangName =
    pickRandomWord(elements[userAnswer1]) + " " +
    pickRandomWord(animals[userAnswer2]) + " " +
    pickRandomWord(color[userAnswer3]) + " " +
    pickRandomWord(city[userAnswer4]) + " " +
    pickRandomWord(style[userAnswer5]);

  console.log("Your Wu-Tang name:", wuTangName);
  document.querySelector("#result").textContent = wuTangName;
});
