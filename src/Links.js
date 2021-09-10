import { useQuery, gql } from "@apollo/client";

const GET_LINKS = gql`
  query {
    links {
      url
      slug
      modifiedUrl
    }
  }
`;

const Links = ({ onLinkSelected }) => {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data?.links.length ? (
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
      {/* {error && <p>{error.message}</p>} */}
    </div>
  );
};

export default Links;
