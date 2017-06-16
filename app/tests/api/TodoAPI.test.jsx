let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {

        it('should SET valid todos array', () => {
            let dummyTodos = [
                {
                    id: 101,
                    text: 'Test 101',
                    completed: false
                }
            ];
            TodoAPI.setTodos(dummyTodos);

            let returnedTodos = JSON.parse(localStorage.getItem('todos'));
            expect(returnedTodos).toEqual(dummyTodos);
        });

        it('should NOT SET invalid todos array', () => {
            let dummyTodos = { id: 'FAKE TODO HERE' };
            TodoAPI.setTodos(dummyTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });

    });

    describe('getTodos', () => {

        it('should RETURN [] for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should RETURN todo for valid localStorage data', () => {
            let dummyTodos = [
                {
                    id: 101,
                    text: 'Test 101',
                    completed: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(dummyTodos));
            var returnedTodos = TodoAPI.getTodos();
            expect(returnedTodos).toEqual(dummyTodos);
        });
    });

    describe('filterTodos', () => {
        let dummyTodos = [
                {
                    id: 101,
                    text: 'Test 101 here',
                    completed: true
                },
                {
                    id: 102,
                    text: 'Test 102 gone',
                    completed: true
                },
                {
                    id: 103,
                    text: 'Test 103 flying',
                    completed: false
                }
            ];
        
        it ('should RETURN all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(dummyTodos, true, '');
            expect(filteredTodos.length).toBe(dummyTodos.length);
        });

        it ('should NOT RETURN all items if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(dummyTodos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it ('should SORT by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(dummyTodos, true, '');
            expect(filteredTodos[0].completed).toBe(false); 
        });

        it ('should FILTER todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(dummyTodos, true, 'here');
            expect(filteredTodos.length).toBe(1);
        });

        it ('should RETURN all todos for empty searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(dummyTodos, true, '');
            expect(filteredTodos.length).toBe(dummyTodos.length); 
        });

    }); 

});