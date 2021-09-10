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

/* TODO: 
    move all styling over to styles.js 
    add more breakpoints
    fix createLink issue
    style display of links list
    style links input (background color, etc)
    style footer
    make links clickable and direct to original url
    build out footer
    
    make clipboard button to copy link url
*/

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
