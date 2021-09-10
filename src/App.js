import { StrictMode } from "react";
import { makeStyles } from "@material-ui/core/styles";

import LinkInput from "./LinkInput";
import TopSection from "./TopSection";
import Footer from "./Footer";
import Links from "./Links";
import styles from "./styles.js";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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

const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <div className={classes.container}>
          <TopSection />
          <LinkInput />
          <Links />
          <Footer />
        </div>
      </StrictMode>
    </ApolloProvider>
  );
};

export default App;
