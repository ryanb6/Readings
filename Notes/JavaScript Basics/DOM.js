//the DOM is the Document Object Model which is a tree like representation of a webpage
//a tree of nodes with different relationships depending on how they are layed out in HTML
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
//.display and .controls are children of #container
//to select the above .display div, you could do any of the following
div.display
.display
#container > .display
div#container > div.display

//you can use relational selectors like firstElementChild, or lastElementChild

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
//you can also get a nodelist by doing document.querySelectorAll('.example')
//this will return a nodelist, not an array. you can convert this to an array using Array.from() or a spread operator

//create an element using createElement
const div = document.createElement('div', ['optional-parameters']);
//this does NOT place the element in the DOM! it just creates it in memory
//this is so you can change the style of it, colors id's etc before adding it
//use one of the below methods to add it

//this will add childNode as the last child of parentNode
parentNode.appendChild(childNode)

//this will insert newNode into parentNode before referenceNode
parentNode.insert(newNode, referenceNode)

//this will remove child from parentNode on the DOM and returns a reference to child
parentNode.removeChild(child)

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules

div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the div's background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white;" // sets the div's background-color by assigning a CSS string

div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute

div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

//to add text use textContent. innerHTML also works but can produce some security vulnerabilities
div.textContent = 'test';

//events are how you can change your DOM reactively with js
//here is one such method of using events
<button onclick="alert('Hello World')">Click Me</button>
//this is not ideal because it clutters the html, and you can only set one onclick function per dom element

//here is another method
//<!-- the HTML file -->
<button id="btn">Click Me</button>
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
//the js is moved out of the html file, but we can still only have one onclick event like this

//here is a final method
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

// the JavaScript file
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);

//access information about the event using function (e)
//this is a callback from add event listener

btn.addEventListener('click', function (e) {
  console.log(e);
});

//callbacks are functions that are passed into other functions as parameters
let letters = ['a','b','c']
letters.forEach((item) => {console.log(item)})

btn.addEventListener('click', function (e) {
  console.log(e);
});
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});



















