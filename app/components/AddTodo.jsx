let React = require('react');

let AddTodo = React.createClass({

    handleSubmit : function(e){
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if ( todoText.length > 0 ){
            this.refs.todoText.value = '';
            this.props.handleAddTodo(todoText);
        }
        else
            this.refs.todoText.focus();
    },

    render : function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref='todoText' placeholder='Add a new Todo' />
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        );
    }

});

module.exports = AddTodo;