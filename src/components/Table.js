import React from 'react';
import DocumentTitle from 'react-document-title';

require('../../node_modules/react-datagrid/index.css')
import DataGrid from 'react-datagrid'



//This is a dumb component just for displaying the data in a table
export default class Table extends React.Component {
  render() {
    const { fetch } = this.props

    if (fetch.pending) {
      return <div><h1>{'loading'}</h1></div>

    } else if (fetch.rejected) {
      return  <div><h1>{'error'}</h1></div>

    } else if (fetch.fulfilled) {

      
      var columns = []
      //build header names for every key in the (first record of the ) resource
      for(let k of Object.keys(fetch.value.resource[0])){
        columns.push({'name': k })
      }
      console.log(columns)

      return (
          <DocumentTitle title={`My TABLE`}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <DataGrid idProperty="id" dataSource={fetch.value.resource} columns={columns} defaultPageSize={1000}/>
                </div>
              </div>
            </div>
          </DocumentTitle>

      );

    }
  }
}


