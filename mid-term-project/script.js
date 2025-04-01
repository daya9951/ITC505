const storyData = {
  start: {
    text: "You are a Jedi Padawan at the Jedi Temple. What will you do?",
    choices: [
      { text: "Go on a secret mission to Tatooine", next: "tatooine" },
      { text: "Stay and train with Master Yoda", next: "yoda" }
    ],
    image: "<img src='1.jpg' alt='Jedi Temple'>"
  },
  tatooine: {
    text: "You arrive on Tatooine. You find a mysterious Sith artifact in a cave.",
    choices: [
      { text: "Use the artifact", next: "artifact_master" },
      { text: "Destroy it", next: "darkness" }
    ],
    image: "<img src='2.jpg' alt='Tatooine'>"
  },
  yoda: {
    text: "Master Yoda begins your intense training. It is rigorous and enlightening.",
    choices: [
      { text: "Continue and master the training", next: "jedi_master" },
      { text: "Leave to pursue forbidden knowledge", next: "banished" }
    ],
    image: "<img src='3.jpg' alt='Yoda Training'>"
  },
  artifact_master: {
    text: "You master the Sith artifact and gain power without falling. You are a balance of light and dark.",
    choices: [],
    image: "<img src='4.jpg' alt='Artifact Master'>"
  },
  darkness: {
    text: "The artifact corrupts you. You become a Sith Lord feared across the galaxy.",
    choices: [],
    image: "<img src='5.jpg' alt='Sith Lord'>"
  },
  jedi_master: {
    text: "Your dedication pays off. You become a Jedi Master and serve the Republic wisely.",
    choices: [],
    image: "<img src='6.jpg' alt='Jedi Master'>"
  },
  banished: {
    text: "You gain knowledge but are exiled. You live in solitude, studying ancient powers.",
    choices: [],
    image: "<img src='7.jpg' alt='Banished Jedi'>"
  },
  duel: {
    text: "You face Darth Vader. Your strength is tested in an epic duel.",
    choices: [
      { text: "Defeat Vader", next: "victory" },
      { text: "Join Vader", next: "apprentice" }
    ],
    image: "<img src='8.jpg' alt='Lightsaber Duel'>"
  },
  victory: {
    text: "You defeat Vader and restore balance to the Force. The galaxy celebrates your heroism.",
    choices: [],
    image: "<img src='9.jpg' alt='Victory'>"
  },
  apprentice: {
    text: "Vader defeats you and turns you into his apprentice. The galaxy trembles.",
    choices: [],
    image: "<img src='10.jpg' alt='Sith Apprentice'>"
  }
};

let currentStage = "start";

function startGame() {
  currentStage = "start";
  updatePage();
}

function updatePage() {
  const stage = storyData[currentStage];
  const storyDiv = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");
  const imageDiv = document.getElementById("image");

  storyDiv.textContent = stage.text;
  choicesDiv.innerHTML = "";
  imageDiv.innerHTML = stage.image;

  if (stage.choices.length === 0) {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";
    restartBtn.onclick = startGame;
    choicesDiv.appendChild(restartBtn);
    return;
  }

  stage.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      currentStage = choice.next;
      updatePage();
    };
    choicesDiv.appendChild(btn);
  });
}

window.onload = startGame;
