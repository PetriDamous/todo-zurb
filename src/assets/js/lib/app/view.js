// Imports
import { _incomplete, _todoItems } from './global';
import { getFilters } from './filters';



const filters = getFilters();

// Elements
const incomplete = _incomplete();
const todoItems = _todoItems();



// Creates todo element
const generateTodoDOM = (todo) => {

    // Create elements
    const todoEl = document.createElement('div');    
    const todoTxt = document.createElement('span');
    const todoChk = document.createElement('input');
    const deleteBtn = document.createElement('button');    
    
    // Assign class names
    todoEl.className = 'todo';
    deleteBtn.className = 'button warning';

    // Assign attributes
    todoChk.setAttribute('type', 'checkbox');

    // Set text values    
    todoTxt.textContent = `${todo.text}: ${todo.completed}`;
    deleteBtn.textContent = 'Delete';

    // Event listeners
    deleteBtn.addEventListener('click', function() {
        // const todos = getSavedTodos();
        
        removeTodo(todo.id);
        saveTodo(todos);
        renderTodos(todos, filters);
        
    });

    // Append to parent
    todoEl.appendChild(todoChk);
    todoEl.appendChild(todoTxt);
    todoEl.appendChild(deleteBtn);
            
    return todoEl;  
}

// Changes the completed number of todos
const generateSummaryDOM = (todos) => {
    const todoIncomplete = todos.filter(function(todo) {
        return !todo.completed;
    });    

    incomplete.textContent = `You have ${todoIncomplete.length} todos left.`;
}

// Render todos to DOM
export const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
        const searchCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && searchCompletedMatch;
    });

    // Clears todo-items area for re-rendering
    todoItems.innerHTML = '';

    // Renders filtered todos
    filteredTodos.forEach(function(todo) {
        const todoEl = generateTodoDOM(todo);
        todoItems.appendChild(todoEl); 
    });    

    // Changes the completed number
    generateSummaryDOM(filteredTodos);
}

