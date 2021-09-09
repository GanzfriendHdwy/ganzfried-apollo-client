import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";

import LinkInput from "./LinkInput";
import TopBar from "./TopBar";
import styles from "./styles.js";

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

const useStyles = makeStyles(styles);

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
      modifiedUrl
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
        data.links.map(({ url, slug, modifiedUrl }) => (
          <div>
            <p>Original: {url}</p>
            {/* <p>{slug}</p> */}
            <p>Modified: {modifiedUrl}</p>
          </div>
        ))
      ) : (
        <div>No links have been shortened yet</div>
      )}
    </div>
  );
}

const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <div className={classes.container}>
          <TopBar />
          <LinkInput />
          <Links />
        </div>
      </StrictMode>
    </ApolloProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
