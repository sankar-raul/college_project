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
load(sentence,element);