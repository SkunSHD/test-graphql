import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
// GQL
import client from "./GQL/client";
// Components
import TestQuery from "./components/TestQuery.component";


function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				hello app
				<TestQuery />
			</div>
		</ApolloProvider>
	);
}

export default App;
