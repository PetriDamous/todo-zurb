const filters = {
    searchTodo: '',
    hideCompleted: false
}

const getFilters = () => filters;

const setFilters = (filterValue) => {
    if (typeof filterValue === 'string' ) {
        filters.searchTodo = filterValue;
    }
    
    if (typeof filterValue === 'boolean') {
        filters.hideCompleted = filterValue;
    }
}

export { getFilters, setFilters };