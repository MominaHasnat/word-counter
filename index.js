import promptSync from "prompt-sync";
const prompt = promptSync();
let userString = prompt("Please Enter the desire string:");
console.log(userString);
function wordCounter(a) {
    let words = a.split(/\s+/).filter(word => word !== "");
    return words.length;
}
function characterCounter(a) {
    let character = a.replace(/\s+/g, "");
    return character.length;
}
console.log(`Number of words in ${userString} are : ${wordCounter(userString)}`);
console.log(`Number of character in ${userString} are : ${characterCounter(userString)}`);
