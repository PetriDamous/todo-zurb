import { getSavedTodos, renderTodos, saveTodo } from './todo-functions';
const uuidv4 = require('uuid/v4');

let todos = getSavedTodos();

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
    
    saveTodo(todos, value);

    renderTodos(todos, filters);        
});


deleteAll.addEventListener('click', function () {    
    localStorage.clear();
    todos = [];
    renderTodos(todos, filters);    
});