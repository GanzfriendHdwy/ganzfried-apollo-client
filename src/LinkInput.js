import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useMutation, gql } from "@apollo/client";

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: 200
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing(8),
    backgroundColor: palette.secondary
  }
}));

const CREATE_LINK = gql`
  mutation {
    createLink(url: $url, slug: $slug) {
      url
      slug
      modifiedUrl
    }
  }
`;

// const CREATE_LINK = gql`
//   mutation CreateLink($url: String!, $slug: String!) {
//     createLink(url: $url, slug: $slug) {
//       url
//       slug
//       modifiedUrl
//     }
//   }
// `;

const LinkInput = () => {
  const classes = useStyles();
  const [addLink, { data, loading, error }] = useMutation(CREATE_LINK);
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  const handleSubmit = () => {
    console.log(url);
    console.log(slug);
    addLink({ variables: { url, slug } });
    if (!error) {
      setUrl("");
      setSlug("");
    }
    console.log("submit triggered");
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          // error
          id="url"
          label="Make your links shorter"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          helperText="ex. https://example.com"
        />
      </div>
      <div>
        <TextField
          // error
          id="slug"
          label="Custom slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          helperText="ex. abc123"
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
          size="small"
        >
          Shorten URL
        </Button>
      </div>
    </div>
  );
};

export default LinkInput;

// function AddLink() {
//   let input;
//   const [addLink, { data, loading, error }] = useMutation(CREATE_LINK);

//   if (loading) return "Submitting...";
//   if (error) return `Submission error! ${error.message}`;

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addLink({ variables: { url: input.value, slug: input.slug } });
//           input.value =
//             "https://codesandbox.io/s/zealous-bird-3bytl?file=/src/index.js";
//           input.slug = "abc123";
//         }}
//       >
//         <input
//           ref={(node) => {
//             input = node;
//           }}
//         />
//         <button type="submit">Add Link</button>
//       </form>
//     </div>
//   );
// }
