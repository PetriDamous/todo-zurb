import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

const todos = [
    {
        text: 'study JavaScript',
        completed: true
    }, {
        text: 'finish Sass exercise',
        completed: false
    }, {
        text: 'complete SVG exercise',
        completed: false       
    }, {
        text: 'feed the monkey',
        completed: true      
    }, {
        text: 'beat mega man x9',
        completed: false
    }
];

const addBtn = document.getElementById('add-item');
const searchItem = document.getElementById('search-item');
console.log(searchItem);

const getIncomplete = todos.filter(function(todo) {
    return !todo.completed;
});

const incomplete = document.createElement('h2');
incomplete.textContent = `You have ${getIncomplete.length} todos left.`;
document.querySelector('body').appendChild(incomplete);

todos.forEach(function(todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
    console.log(p)
});


addBtn.addEventListener('click', function(e) {
    console.log('button is clicked');
});

searchItem.addEventListener('input', function(e) {
    console.log(e.target.value);
});


/*
// You have 3 todos left (p element)
// Add a p for each todo above (use text value)

const todosLeft = document.createElement('p');
todosLeft.textContent = `You have ${leftCount(todos)} todos left.`;
document.body.appendChild(todosLeft);

function leftCount(todos) {
    let count = 0;

    todos.forEach(function(todo) {
        if (todo.completed === false) count += 1;
    });

    return count;
}
*/

// Remove multiple elements
// let ps = document.querySelectorAll('p');
// 
// ps.forEach(function(p) {
    // if (p.textContent.includes(' the ')) p.remove();
// });