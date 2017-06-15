let React = require('react');

let Search = React.createClass({

    handleSearch : function(e){
        e.preventDefault();
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.handleSearch(showCompleted, searchText);
    },

    render : function() {
        return (
            <div>
                <div>
                    <input type="text" ref="searchText" placeholder="Search a Todo" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }

});

module.exports = Search;