const diceOne = {
    number: 1,
    color: "red",
    image: "one.png"
};
const diceTwo = {
    number: 2,
    color: "blue",
    image: "two.png"
};
const diceThree = {
    number: 3,
    color: "orange",
    image: "three.png"
};
const diceFour = {
    number: 4,
    color: "green",
    image: "four.png"
};
const diceFive = {
    number: 5,
    color: "black",
    image: "five.png"
};
const diceSix = {
    number: 6,
    color: "purple",
    image: "six.png"
};

const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
console.log(dice);

const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)];
};

const result = {};

const diceValues = () => {
    result.diceRoll = randomSelector(dice);

    const theDiceRoll = document.getElementById("diceRoll");
    const theDiceImage = document.getElementById("diceImage");
    const theDiceNumber = document.getElementById("diceNumber");

    theDiceRoll.style.background = result.diceRoll.color;
    theDiceImage.setAttribute("src", result.diceRoll.image);
    theDiceNumber.innerHTML = result.diceRoll.number;
};
diceValues();

// Connect button to function
document.getElementById("button").onclick = diceValues;

