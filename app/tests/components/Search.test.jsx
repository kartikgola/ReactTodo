let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let Search = require('Search');

describe('Search', () => {

    it('should exist', () => {
        expect(Search).toExist();
    });

    it('should CALL handleSearch prop with VALID data', () => {
        var searchText = 'Walk dog';
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(search));

        search.refs.searchText.value = searchText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalled(searchText);
    });

    it('should NOT CALL handleSearch prop with INVALID data', () => {
        var searchText = '';
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(search));

        search.refs.searchText.value = searchText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(searchText);
    });

});