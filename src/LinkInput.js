import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useMutation, gql } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const LinkInput = () => {
  const classes = useStyles();
  const [addLink, { data, loading, error }] = useMutation(CREATE_LINK);
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = () => {
    addLink({ variables: { url, slug } });
    setUrl("");
    setSlug("");
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          // error
          id="url"
          label="Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          helperText="ex. https://example.com"
        />
      </div>
      <div>
        <TextField
          // error
          id="slug"
          label="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          helperText="ex. abc123"
        />
      </div>
      <div>
        <button onSubmit={handleSubmit} type="submit">
          Add Link
        </button>
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
