
import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Routes from './Routes'
import '../index.css';
import { graphql_apollo_config } from './config/apollo.config'

const client = new ApolloClient(graphql_apollo_config);

export default class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Routes />
			</ApolloProvider>
		);
  }
}


