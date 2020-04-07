import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const allMoviesFrom200Query = gql`
    query AllMoviesFrom2000 {
        posts {
            title
        }
    }
`;

export default function TestQuery() {
	// Must be rendered inside of an ApolloProvider
	const { loading, error, data } = useQuery(allMoviesFrom200Query);
	return (
		<div>
			{loading && <div>loading</div>}
			{error && <div>{`encountered an error: ${error}`}</div>}
			{data && <div>{`successfully queried ${data.length} movies from the year 2000.`}</div>}
		</div>
	);
}
