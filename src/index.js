import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import LinkInput from "./LinkInput";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://yhhb0.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query GetLinks {
//         links {
//           url
//           slug
//         }
//       }
//     `
//   })
//   .then((result) => console.log(result));

const GET_LINKS = gql`
  query GetLinks {
    links {
      url
      slug
    }
  }
`;

function Links({ onLinkSelected }) {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.links.length ? (
        data.links.map(({ url, slug }) => (
          <div>
            <p>{url}</p>
            <p>{slug}</p>
          </div>
        ))
      ) : (
        <div>No links have been shortened yet</div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <div>
        <App />
        <LinkInput />
        <Links />
      </div>
    </StrictMode>
  </ApolloProvider>,
  rootElement
);
