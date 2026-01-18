// document.getElementById("count-el")
// document.getElementById('increment-btn');

// let count = 5

// count = count + 1;
// console.log(count);

let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');

let count = 0;

console.log(saveEl);

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + ' - ';
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// let message = "You have three new notifications"

// console.log(message)

// let messageToUser = "You have three new notifications, per!"

// let myName = "Mariana";
// let greeting = "Hi, my name is "

// let myGreeting = greeting + myName;
// console.log(myGreeting)
