
let React = require('react');
let TodoList = require('TodoList');

let TodoApp = React.createClass({

  getInitialState : function() {
    return {
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

  render : function() {

    let {todos} = this.state;

    return (
      <div>

        <div className="row">
          <div className="small-2 small-centered columns">
            <h1> TodoApp </h1>
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <TodoList todos={todos} />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = TodoApp;
