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

// Elements
const incomplete = document.getElementById('incomplete');
const todoItems = document.getElementById('todo-items');

// Components
const addForm = document.getElementById('add-form');
const removeBtn = document.getElementById('remove-btn');
const searchField = document.getElementById('search-field');

// Filters
const filters = {
    searchTodo: ''
}


function renderTodos (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
    });

    todoItems.innerHTML = '';

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p');
        todoEl.className = 'todo';
        todoEl.textContent = `${todo.text}: ${todo.completed}`;
        todoItems.appendChild(todoEl);
    });

    getIncomplete(filteredTodos);
}

function getIncomplete (todos) {
    const todoIncomplete = todos.filter(function(todo) {
        return !todo.completed;
    });    

    incomplete.textContent = `You have ${todoIncomplete.length} todos left.`;
}

renderTodos(todos, filters);

searchField.addEventListener('input', function(e) {
    filters.searchTodo = e.target.value;
    renderTodos(todos, filters);
});

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = e.target.addTodo.value;
    console.log(e.target)
    todos.push(
        {
            text: value,
            completed: false
        }
    );

    e.target.addTodo.value = '';

    renderTodos(todos, filters);

    console.log(todos);
});






removeBtn.addEventListener('click', function () {    
    
    todos.forEach(function (todo, idx) {
        todos.splice(idx, 1); 
    });

    renderTodos(todos, filters);

    console.log(todos)
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