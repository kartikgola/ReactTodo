let React = require('react');

let Todo = React.createClass({

  handleToggle : function(e){
    this.props.handleToggle(this.props.id);
  },

  render : function(){

    let {text, completed} = this.props;

    return (
      <div onClick={this.handleToggle}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }

});

module.exports = Todo;
