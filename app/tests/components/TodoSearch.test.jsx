let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should CALL handleSearch prop with (FALSE checkbox, INPUT text)', () => {
        var searchText = 'Walk dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoSearch));

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchText);
    });

    it('should CALL handleSearch prop with (TRUE checkbox, INPUT text)', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy} />);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });

});