// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();

let newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = "Melchior Balthazar is the champion";

document.body.append(newHeader);
