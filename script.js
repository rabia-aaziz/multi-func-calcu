let numbers = [];

function insert(){
    var userInput = parseInt(document.querySelector("input").value);
    numbers.push(userInput);
    var insertShow = document.querySelector("#insertvalue");
    insertShow.innerHTML += `<span>${userInput}</span>`;
}

function calcSum(){
    let sumNumbs = 0;
    for(let i = 0; i < numbers.length; i++){
        sumNumbs += numbers[i];
    }
    return sumNumbs;
}

function sum(){
    let answer = calcSum();
    document.querySelector("#output").innerHTML = `Result: Sum = ${answer}`;  
}

function avg() {
    let sumOfArray = calcSum();
    sumOfArray /= numbers.length;
    document.querySelector("#output").innerHTML = `Result: Average = ${sumOfArray}`;  
    
}

function calcProduct(){
    let productOfArray = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        productOfArray *= numbers[i];
    }      
    document.querySelector("#output").innerHTML = `Result: Product = ${productOfArray}`;  
}

function clean(){
    location.reload();
}