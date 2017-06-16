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

});