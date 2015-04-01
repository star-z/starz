/** @jsx React.DOM */

var React = require('react/addons'),
    Griddle = React.createFactory(require('griddle-react')),
    fakeData = require('../../mock-data/fakeData.js').fakeData,
    columnMeta = require('../../mock-data/columnMeta.js').columnMeta,
    resultsPerPage = 20;

var App = React.createClass({

      componentDidMount: function () {
        // console.log(fakeData);
      },

      render: function () {

        return (
          <div id="table-area">
             <Griddle results={fakeData} 
                      columnMetadata={columnMeta} 
                      resultsPerPage={resultsPerPage} 
                      tableClassName="table" />
          </div>
        )
      }
  });

module.exports = App;