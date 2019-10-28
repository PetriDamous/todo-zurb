const uuidv4 = require('uuid/v4');

let todos = [];

// Get todos from local storage
export const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }    
}

// Updates local storage
const saveTodo = () => localStorage.setItem('todos', JSON.stringify(todos));


// removes todo from array
const removeTodo = (id) => {    
    
    const todoIdx = todos.findIndex(function(todo) {
        return todo.id === id;
    });

    todos.splice(todoIdx, 1);    
}

// Adds todo item to array 
const createTodo = (value) => {
    todos.push(
        {
            id: uuidv4(),
            text: value,
            completed: true
        }
    );    

    todos.forEach(function (todo) {
        todo.text.trim();
        
        if (todo.text.length <= 0) todo.text = 'Untitled';            
        
    });  
       
}

todos = loadTodos();

const getTodos = () => todos;

export { getTodos, createTodo, saveTodo, removeTodo };