
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {

  beforeEach( () => {
    localStorage.removeItem('todos');
  });

  it ('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should ADD todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos : []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });


  it('should TOGGLE INCOMPLETE value when handleToggle prop is called', () => {
    
    var dummyTodo = {
      id : 121,
      text : 'Test toggle',
      completed : false,
      createdAt : 0,
      completedAt : undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos : [dummyTodo] });
    
    var initStatus = false; // false
    todoApp.handleToggle(121);

    expect(todoApp.state.todos[0].completed).toBe(true); // completed == true
    expect(todoApp.state.todos[0].completedAt).toBeA('number'); // typeof completedAt == number
  });


  it('should TOGGLE COMPLETE value when handleToggle prop is called', () => {
    
    var dummyTodo = {
      id : 121,
      text : 'Test toggle',
      completed : true,
      createdAt : 0,
      completedAt : 123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos : [dummyTodo] });
    
    var initStatus = true;
    todoApp.handleToggle(121);

    expect(todoApp.state.todos[0].completed).toBe(false); // completed == false
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });



});
