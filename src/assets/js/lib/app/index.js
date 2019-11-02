import { createTodo, saveTodo, clearAll } from './todos';
import { setFilters } from './filters';
import { renderTodos } from './view';
import { _addForm, _deleteAll, _searchField, _hideComplete } from './global';



// createTodo('puppy');
// console.log(getTodos());
// saveTodo();
// removeTodo("3aca5fb5-4c50-45c4-a364-df7f86a3ec9a");
// saveTodo();





// Components
const addForm = _addForm();
const deleteAll = _deleteAll();
const searchField = _searchField();
const hideComplete = _hideComplete();

renderTodos();

searchField.addEventListener('input', function(e) {
    setFilters(e.target.value);
    renderTodos();
});


hideComplete.addEventListener('change', function (e) {
    setFilters(e.target.value); 
    renderTodos();   
});


addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = e.target.addTodo.value;
    createTodo(value);
    saveTodo();
    e.target.addTodo.value = ''; 
    renderTodos();        
});


deleteAll.addEventListener('click', function () {    
    clearAll();
    saveTodo();
    renderTodos();    
});