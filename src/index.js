import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
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

const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

function AddLink() {
  let input;
  const [addLink, { data, loading, error }] = useMutation(CREATE_LINK);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addLink({ variables: { url: input.value, slug: input.slug } });
          input.value =
            "https://codesandbox.io/s/zealous-bird-3bytl?file=/src/index.js";
          input.slug = "abc123";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Link</button>
      </form>
    </div>
  );
}

function Links({ onLinkSelected }) {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <select name="Link" onChange={onLinkSelected}>
      {data.Links.map((Link) => (
        <option key={Link.url} value={Link.slug}>
          {Link.url}
        </option>
      ))}
    </select>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <div>
        <App />
        <Links />
        <AddLink />
      </div>
    </StrictMode>
  </ApolloProvider>,
  rootElement
);
