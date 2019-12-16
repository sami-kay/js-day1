const door1 = document.getElementById('door-1');
const door2 = document.getElementById('door-2');
const doorText = document.getElementById('clickResults');




door1.addEventListener('click', () => {
  doorText.innerText = "You clicked on door Number 1!";
});

door2.addEventListener('click', () =>{
  doorText.innerText = "You clicked on door Number 2!";
});
