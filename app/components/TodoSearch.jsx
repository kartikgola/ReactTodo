let React = require('react');

let TodoSearch = React.createClass({

    handleSearch : function(e){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.handleSearch(showCompleted, searchText);
    },

    render : function() {
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search a Todo" onChange={this.handleSearch}/>
                </div>
                <div onChange={this.handleSearch}>
                    <label>
                        <input type="checkbox" ref="showCompleted" className="checkbox" />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }

});

module.exports = TodoSearch;
