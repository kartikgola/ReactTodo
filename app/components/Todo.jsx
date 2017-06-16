let React = require('react');
let moment = require('moment');

let Todo = React.createClass({

  handleToggle: function (e) {
    this.props.handleToggle(this.props.id);
  },

  render: function () {

    let { text, completed, createdAt, completedAt } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';

    let renderDate = () => {
      let message = 'Created ';
      var timeStamp = createdAt;

      if (completedAt){
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm A');
    };

    return (
      <div className={todoClassName} onClick={this.handleToggle}>

        <div>
          <input type="checkbox" checked={completed} />
        </div>

        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>

      </div>
    );
  }

});

module.exports = Todo;
