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

let todos = [];

const todosJSON = localStorage.getItem('todos');

console.log(todosJSON)

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}

console.log(todos);

// Elements
const incomplete = document.getElementById('incomplete');
const todoItems = document.getElementById('todo-items');

// Components
const addForm = document.getElementById('add-form');
const deleteAll = document.getElementById('delete-all');
const searchField = document.getElementById('search-field');
const hideComplete = document.getElementById('hide-complete');

// Filters
const filters = {
    searchTodo: '',
    hideCompleted: false
}


function renderTodos (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
    });

    console.log(filteredTodos)

    const filteredComplete = todos.filter(function (todo) {
        return !todo.completed; 
    });    

    
    // Clears todo-items area for re-rendering
    todoItems.innerHTML = '';

    // Renders filtered todos
    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p');                       
        todoEl.className = 'todo';

        if (todo.text.length > 0) {
            todoEl.textContent = `${todo.text}: ${todo.completed}`;
        } else {
            todoEl.textContent = `Untiled to-do: ${todo.completed}`;
        }
                
        todoItems.appendChild(todoEl);        
    });    

    // Changes the completed number
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


hideComplete.addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked; 
    renderTodos(todos, filters);   
});


addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = e.target.addTodo.value;
    e.target.addTodo.value = '';

    todos.push(
        {
            text: value,
            completed: false
        }
    );
    

    todos.forEach(function (todo) {
        todo.text.trim();
    });

    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);        
});


deleteAll.addEventListener('click', function () {    
    localStorage.clear();
    todos = [];
    renderTodos(todos, filters);    
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