<<<<<<< HEAD
const element = document.getElementById("greet");
let sentence = "Let's tour the Kolkata Book Fair virtual gallery for an enriching experience";
function load(sentence,element) {
    if (sentence.length == 0) {
        return;
    }
    let i = 0;
    const addChar = () => {
      if (i+1 < sentence.length) {
        element.innerHTML += sentence[i+1];
        i++;
        setTimeout(addChar,40);
      }
    }
    addChar();
}
=======
const element = document.getElementById("greet");
let sentence = "Let's tour the Kolkata Book Fair virtual gallery for an enriching experience";
function load(sentence,element) {
    if (sentence.length == 0) {
        return;
    }
    let i = 0;
    const addChar = () => {
      if (i+1 < sentence.length) {
        element.innerHTML += sentence[i+1];
        i++;
        setTimeout(addChar,40);
      }
    }
    addChar();
}
>>>>>>> b1d19c72fd3d7642f4823a715583e9780ab45a59
load(sentence,element);