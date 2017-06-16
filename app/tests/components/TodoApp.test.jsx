
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it ('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should ADD todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos : []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should TOGGLE completed value when handleToggle prop is called', () => {
    
    var dummyTodo = {
      id : 121,
      text : 'Test toggle',
      completed : false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos : [dummyTodo] });
    
    var initStatus = todoApp.state.todos[0].completed;
    todoApp.handleToggle(todoApp.state.todos[0].id);

    expect(todoApp.state.todos[0].completed).toBe(!initStatus);
  });

});
