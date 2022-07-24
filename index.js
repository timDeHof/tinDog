// Remember to import the data and Dog class!
import dogsData from './data.js';
import Dog from './Dog.js';

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
console.log(currentDog.getDogHtml());
document.getElementById('accept-button').addEventListener('click', yes);

render();

function render() {
  document.getElementById('card').innerHTML = currentDog.getDogHtml();
}

// get the next dogs data and render it
function getNewDog() {
  currentDogIndex++;
  currentDog = new Dog(dogsData[currentDogIndex]);
  render();
}

function yes() {
  currentDog.setMatchStatus(true);
  getNewDog();
}
