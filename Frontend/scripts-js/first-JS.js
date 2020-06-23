const myHeading = document.querySelector('h1');         //reference to h1 stored in variable
myHeading.textContent = 'Hello world!';                 //assign value to property of referenced object
document.querySelector("html").ondblclick = function() {
    alert("ouch stop poking me");
}

//do this in one line w/o variables: document.querySelector('h1').textContent="Hello world"; 
alert('hello!');

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

//image selection
let meinBild = document.querySelector("img");
meinBild.onclick =  function() {
    let mySource = meinBild.getAttribute("src");
    if(mySource==="images/fuehrerschein.jpg") {
        meinBild.setAttribute ("src","images/clemens-und-sebi.JPG");
    } else {
        meinBild.setAttribute ("src","images/fuehrerschein.jpg");
    }
}

let meinButton = document.querySelector("button");
let meineHauptüberschrift = document.querySelector("h1")

function nutzereinstellen() {
    let nutzername = prompt("Wie heißt du?");
    if (!nutzername) {
        nutzereinstellen()
    } else {
        localStorage.setItem("nutzer",nutzername);
        myHeading.textContent="Willkommen, " + nutzername;
    }
}
if(!localStorage.getItem("nutzer")) {
    nutzereinstellen();
} else {
    let gespeicherterName = localStorage.getItem("nutzer")
    myHeading.textContent="Willkommen, "+gespeicherterName;
}
meinButton.onclick=function(){
    nutzereinstellen();
}

//resize button and create a storage button option for the prompt, always popping up