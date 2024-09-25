let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector("button");

let dataset = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

let userSelected = {},
  computerSelected = {};

function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerText = `It's a tie`;
  } else if (user.beats === computer.name) {
    result.innerText = "🎉You Won🎉";
  } else {
    result.innerText = "❌Computer Won❌";
  }
}

function createRandomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}

function createUserLayout() {
  userRoot.innerHTML = "";
  dataset.forEach((data) => {
    let li = document.createElement("li");
    let i = document.createElement("i");

    i.className = `fas fa-hand-${data.name}`;
    li.append(i);

    if (userSelected.name === data.name) {
      li.classList.add("selected");
    }

    li.addEventListener("click", () => {
      userSelected = data;

      computerSelected = dataset[createRandomNumber()];

      getWinner(userSelected, computerSelected);

      createComputerLayout();
      createUserLayout();
    });

    userRoot.append(li);
  });
}

createUserLayout();

function createComputerLayout() {
  computerRoot.innerHTML = "";
  dataset.forEach((data) => {
    let li = document.createElement("li");
    let i = document.createElement("i");

    if (computerSelected.name === data.name) {
      li.classList.add("selected");
    }

    i.className = `fas fa-hand-${data.name}`;
    li.append(i);
    computerRoot.append(li);
  });
}

createComputerLayout();

reset.addEventListener("click", () => {
  userSelected = {};
  computerSelected = {};

  createComputerLayout();
  createUserLayout();

  result.innerText = "";
});
