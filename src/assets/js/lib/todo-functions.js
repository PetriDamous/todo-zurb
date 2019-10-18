// Elements
const incomplete = document.getElementById('incomplete');
const todoItems = document.getElementById('todo-items');

// Get todos from local storage
export const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }    
}

// Creates todo element
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('p');                       
    todoEl.className = 'todo';

    if (todo.text.length > 0) {
        todoEl.textContent = `${todo.text}: ${todo.completed}`;
    } else {
        todoEl.textContent = `Untiled to-do: ${todo.completed}`;
    }
            
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

// Adds todo item to array and local storage
export const saveTodo = (todos, value) => {
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
}