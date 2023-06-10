const generateButton = document.getElementById('generator');
const resultElement = document.getElementById('result');
const rangeElement = document.getElementById('range');
const rangeInfoElement = document.getElementById('rangeInfo');
const includeNumbers = document.getElementById('numbers');
const inlcudeSymbols = document.getElementById('symbols');
const lowercaseLetters = document.getElementById("lowercaseLetters");
const uppercaseLetters = document.getElementById("uppercaseLetters");
const charsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolsArray = ['!', '@', '#', '$', '%'];
const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let resultLength = 10;

function generatePassword(){
    let result = '';

    let arr = [charsArray];

    if(includeNumbers.checked){
        arr.push(numbersArray);
    }
    
    if(inlcudeSymbols.checked){
        arr.push(symbolsArray);
    }
    if(lowercaseLetters.checked){
        arr.pop(charsArray)
        arr.push(lowercaseArray)
    }
    if(uppercaseLetters.checked){
        arr.push(charsArray)
    }
    

    for(let i = 0; i < resultLength; i++){

        let randomArray = arr[randomGenerator(0, arr.length)];
        result += randomArray[randomGenerator(0, randomArray.length)];

    }

    resultElement.innerText = result;

}

function changeRangeElement(){
    rangeInfoElement.innerText = rangeElement.value;
    resultLength = parseInt(rangeInfoElement.innerText);
}

function randomGenerator(min, max){
    return  min + Math.floor(Math.random() * (max - min));
}

generateButton.addEventListener('click', generatePassword);
rangeElement.addEventListener("change", changeRangeElement);