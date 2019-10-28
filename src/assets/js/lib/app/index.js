import { getTodos, createTodo, saveTodo, removeTodo } from './todos';


createTodo('puppy');
console.log(getTodos());
saveTodo();
removeTodo("3aca5fb5-4c50-45c4-a364-df7f86a3ec9a");
saveTodo();

// import { getSavedTodos, renderTodos, createTodo } from './src/assets/js/lib/app/view';
// import { _addForm, _deleteAll, _searchField, _hideComplete } from './src/assets/js/lib/app/global';
// import { getFilters } from './src/assets/js/lib/app/filters';

// let todos = getSavedTodos();

// const filters = getFilters();

// // Components
// const addForm = _addForm();
// const deleteAll = _deleteAll();
// const searchField = _searchField();
// const hideComplete = _hideComplete();

// renderTodos(todos, filters);

// searchField.addEventListener('input', function(e) {
//     filters.searchTodo = e.target.value;
//     renderTodos(todos, filters);
// });


// hideComplete.addEventListener('change', function (e) {
//     filters.hideCompleted = e.target.checked; 
//     renderTodos(todos, filters);   
// });


// addForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const value = e.target.addTodo.value;
//     e.target.addTodo.value = '';
//     // debugger
//     createTodo(todos, value);

//     renderTodos(todos, filters);        
// });


// deleteAll.addEventListener('click', function () {    
//     localStorage.clear();
//     todos = [];
//     renderTodos(todos, filters);    
// });