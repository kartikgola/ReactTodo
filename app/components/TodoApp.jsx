
let React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({

  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
      todos : TodoAPI.getTodos()
    };
  },

  componentDidUpdate : function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleToggle : function(id){
    var newTodos = this.state.todos.map((todo) => {
      if ( todo.id == id ){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({ todos : newTodos });
  },

  handleAddTodo : function(text){
    this.setState({
      todos : [
        ...this.state.todos,
        {
          id : uuid(),
          text : text,
          completed : false,
          createdAt : moment().unix(),
          completedAt : undefined
        }
      ]
    });
  },

  handleSearch : function(showCompleted, searchText){
      this.setState({
        showCompleted : showCompleted,
        searchText : searchText.toLowerCase()
      });
  },

  render : function() {

    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title"> TodoApp </h1>

        <div className="row">
          <div className="small-10 medium-6 small-centered columns">
            <div className="container">
              <TodoSearch handleSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} handleToggle={this.handleToggle} />
              <AddTodo handleAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = TodoApp;
