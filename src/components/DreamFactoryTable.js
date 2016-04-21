import React from 'react';
import Table from './Table'

// for the api key
var config = require('../../config')
import { connect } from 'react-refetch'

//Here create a container component which provides the data in the props for the Table component
// parameter is the url to fetch from
export const DreamFactoryTable = connect(props => ({
  fetch: {url: props.url,
    method: 'GET',
    headers: {'X-DreamFactory-Api-Key': config.dreamfactory_api_key, 'Accept' : 'application/json'}}
}))(Table)

