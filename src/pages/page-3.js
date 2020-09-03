import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`;

export default () => {
  return (
    <Layout>
      <h1>Hello from Page 3!</h1>
      <h3>Image File Data</h3>
      <StaticQuery
        query={getImageData}
        render={data => (
          <table>
            <thead>
              <tr>
                <th>Relative Path</th>
                <th>Size of Image</th>
                <th>Extension</th>
                <th>Birthtime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.size}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
    </Layout>
  );
};

/*
EXAMPLE WITH useStaticQuery HOOK INSTEAD
export default () => {
  const data = useStaticQuery(graphql`
    query ImageDataQuery {
      allFile {
        edges {
          node {
            relativePath
            size
            extension
            birthTime
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Hello from Page 3!</h1>
      <h3>Image File Data</h3>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size of Image</th>
            <th>Extension</th>
            <th>Birthtime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map((edge, index) => (
            <tr key={index}>
              <td>{edge.node.relativePath}</td>
              <td>{edge.node.size}</td>
              <td>{edge.node.extension}</td>
              <td>{edge.node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
*/
