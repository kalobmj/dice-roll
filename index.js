// dice
const diceOne = document.getElementById("face-1");
const diceOneOne = document.getElementById("face-1-1");
const diceOneTwo = document.getElementById("face-1-2");
const diceOneThree = document.getElementById("face-1-3");

const diceTwo = document.getElementById("face-2");
const diceTwoOne = document.getElementById("face-2-1");
const diceTwoTwo = document.getElementById("face-2-2");
const diceTwoThree = document.getElementById("face-2-3");

const diceThree = document.getElementById("face-3");
const diceThreeOne = document.getElementById("face-3-1");
const diceThreeTwo = document.getElementById("face-3-2");
const diceThreeThree = document.getElementById("face-3-3");

const diceFour = document.getElementById("face-4");
const diceFourOne = document.getElementById("face-4-1");
const diceFourTwo = document.getElementById("face-4-2");
const diceFourThree = document.getElementById("face-4-3");

const diceFive = document.getElementById("face-5");
const diceFiveOne = document.getElementById("face-5-1");
const diceFiveTwo = document.getElementById("face-5-2");
const diceFiveThree = document.getElementById("face-5-3");

const diceSix = document.getElementById("face-6");
const diceSixOne = document.getElementById("face-6-1");
const diceSixTwo = document.getElementById("face-6-2");
const diceSixThree = document.getElementById("face-6-3");

// btns
const roll1 = document.getElementById("dice-1");
const roll2 = document.getElementById("dice-2");
const roll3 = document.getElementById("dice-3");
const roll4 = document.getElementById("dice-4");
const rollButton = document.getElementById("roll-btn");
const resetButton = document.getElementById("reset-btn");

const totalAmount = document.getElementById("total-amt");
const chooseHeader = document.getElementById("header-choose");

let btnValue = 0;

function getRandomNums() {   
    let arr = [];
    let newArr = []; 
    while (arr.length < 4) {
        arr.push((Math.floor(Math.random() * 6) + 1))
    }  
    return arr;   
}

let randomNums = getRandomNums();

roll1.addEventListener('click', () => {
    let localNums = getRandomNums();
    btnValue = 1
    displayDice(localNums[0]);
    resetButton.classList.remove('hidden');
    chooseHeader.classList.add('hidden');
    totalAmount.innerText = localNums[0];
    rollButton.classList.remove('hidden');
    hideBtns();
}) // func for clicking btn 1

roll2.addEventListener('click', () => {
    let localNums = getRandomNums();
    btnValue = 2
    displayDice(localNums[0]);
    displayDiceOne(localNums[1]);
    resetButton.classList.remove('hidden');
    chooseHeader.classList.add('hidden');
    totalAmount.innerText = localNums[0] + localNums[1];
    rollButton.classList.remove('hidden');
    hideBtns();
    
}) // func for clicking btn 2

roll3.addEventListener('click', () => {
    let localNums = getRandomNums();
    btnValue = 3
    displayDice(localNums[0]);
    displayDiceOne(localNums[1]);
    displayDiceTwo(localNums[2]);    
    resetButton.classList.remove('hidden');
    chooseHeader.classList.add('hidden');
    totalAmount.innerText = localNums[0] + localNums[1] + localNums[2];
    rollButton.classList.remove('hidden');
    hideBtns();
    
}) // func for clicking btn 3

roll4.addEventListener('click', () => {
    let localNums = getRandomNums();
    btnValue = 4
    console.log(localNums)
    displayDice(localNums[0]);
    displayDiceOne(localNums[1]);
    displayDiceTwo(localNums[2]);
    displayDiceThree(localNums[3]);  
    resetButton.classList.remove('hidden');
    chooseHeader.classList.add('hidden');
    totalAmount.innerText = localNums[0] + localNums[1] + localNums[2] + localNums[3];
    rollButton.classList.remove('hidden');
    hideBtns();
    
}) // func for clicking btn 4

rollButton.addEventListener('click', () => {
    hideDice();
    rollDie();
})

resetButton.addEventListener('click', () => {
    hideDice();
    showBtns();
    totalAmount.innerText = 0;
    resetButton.classList.add('hidden');
    chooseHeader.classList.remove('hidden');
    rollButton.classList.add('hidden');
    btnValue = 0;
})

// vv start of switches vv

function displayDice(num) {
    switch (num) {
        case 1:
            diceOne.classList.remove("hidden")
            break;
        case 2:
            diceTwo.classList.remove("hidden")
            break;
        case 3:
            diceThree.classList.remove("hidden")
            break;
        case 4:
            diceFour.classList.remove("hidden")
            break;
        case 5:
            diceFive.classList.remove("hidden")
            break;
        case 6:
            diceSix.classList.remove("hidden")
            break;
        default:
            diceFive.classList.remove("hidden")
    } // end switch
    return;
} // end displayDice func

function displayDiceOne(num) {
    switch (num) {
        case 1:
            diceOneOne.classList.remove("hidden")
            break;
        case 2:
            diceTwoOne.classList.remove("hidden")
            break;
        case 3:
            diceThreeOne.classList.remove("hidden")
            break;
        case 4:
            diceFourOne.classList.remove("hidden")
            break;
        case 5:
            diceFiveOne.classList.remove("hidden")
            break;
        case 6:
            diceSixOne.classList.remove("hidden")
            break;
        default:
            diceFiveOne.classList.remove("hidden")
    } // end switch
    return;
} // end displayDice func

function displayDiceTwo(num) {
    switch (num) {
        case 1:
            diceOneTwo.classList.remove("hidden")
            break;
        case 2:
            diceTwoTwo.classList.remove("hidden")
            break;
        case 3:
            diceThreeTwo.classList.remove("hidden")
            break;
        case 4:
            diceFourTwo.classList.remove("hidden")
            break;
        case 5:
            diceFiveTwo.classList.remove("hidden")
            break;
        case 6:
            diceSixTwo.classList.remove("hidden")
            break;
        default:
            diceFiveTwo.classList.remove("hidden")
    } // end switch
    return;
} // end displayDice func

function displayDiceThree(num) {
    switch (num) {
        case 1:
            diceOneThree.classList.remove("hidden")
            break;
        case 2:
            diceTwoThree.classList.remove("hidden")
            break;
        case 3:
            diceThreeThree.classList.remove("hidden")
            break;
        case 4:
            diceFourThree.classList.remove("hidden")
            break;
        case 5:
            diceFiveThree.classList.remove("hidden")
            break;
        case 6:
            diceSixThree.classList.remove("hidden")
            break;
        default:
            diceFiveThree.classList.remove("hidden")
    } // end switch
    return;
} // end displayDice func

// vv hide show funcs vv

function hideDice() {
    const allDie = document.querySelectorAll("div.dice")
    allDie.forEach((die) => {
        die.classList.add("hidden")
    })
    return;
} // end func to hide dice

function hideBtns() {
    const allBtns = document.querySelectorAll("button.dice-amount-btn")
    allBtns.forEach((btn) => {
        btn.classList.add("hidden")
    })
    return;
} // func to hide btns

function showBtns() {
    const allBtns = document.querySelectorAll("button.dice-amount-btn")
    allBtns.forEach((btn) => {
        btn.classList.remove("hidden")
    })
    return;
} // func to hide btns

function rollingDice(num) {
    let localNums = getRandomNums();
    console.log(localNums)
        switch (num) {
            case 1:
                displayDice(localNums[0]);
                totalAmount.innerText = localNums[0];
                break;
            case 2:
                displayDice(localNums[0]);
                displayDiceOne(localNums[1]);
                totalAmount.innerText = localNums[0] + localNums[1];
                break;
            case 3:
                displayDice(localNums[0]);
                displayDiceOne(localNums[1]);
                displayDiceTwo(localNums[2]);
                totalAmount.innerText = localNums[0] + localNums[1] + localNums[2];
                break;
            case 4:
                displayDice(localNums[0]);
                displayDiceOne(localNums[1]);
                displayDiceTwo(localNums[2]);
                displayDiceThree(localNums[3]);
                totalAmount.innerText = localNums[0] + localNums[1] + localNums[2] + localNums[3];
                break;
            default:
                displayDice(1);
                displayDice(2);
                displayDice(3);
                displayDice(4);
        }
        return;
    } // end rollingDice func

function rollDie() {
    let localVal = btnValue
    hideDice();
    rollingDice(localVal)  
} // end rollDie func
