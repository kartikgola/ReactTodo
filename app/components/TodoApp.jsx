
let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let Search = require('Search');

let TodoApp = React.createClass({

  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
      todos : [
        {
          id : 1,
          text : 'Jog around colony'
        },
        {
          id : 2,
          text : 'Wash clothes'
        },
        {
          id : 3,
          text : 'Do some DP problems'
        },
        {
          id : 4,
          text : 'Learn React.js'
        }
      ]
    };
  },

  handleAddTodo : function(text){
    var todos = this.state.todos;
    var newId = todos[todos.length - 1].id + 1;
    todos.push({ id : newId, text : text });

    this.setState({
      todos : todos
    }, () => { alert('Added Todo'); });
  },

  handleSearch : function(showCompleted, searchText){
      this.setState({
        showCompleted : showCompleted,
        searchText : searchText.toLowerCase()
      });
  },

  render : function() {

    let {todos} = this.state;

    return (
      <div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <h1 className="text-center"> TodoApp </h1>
          </div>
        </div>

        <div>
          <div className="small-4 small-centered columns">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <TodoList todos={todos} />
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <AddTodo handleAddTodo={this.handleAddTodo} />
          </div>  
        </div>

      </div>
    );
  }

});

module.exports = TodoApp;
