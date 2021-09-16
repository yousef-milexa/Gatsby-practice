import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const DefaultPageTemplate = () => (
  <Layout>
    <div>
      <h2>title</h2>
      <h3>description</h3>
    </div>
  </Layout>
);

export const DefaultPageTemplateQuery = graphql`
  query DefaultPageTemplateQuery($id: String!) {
    datoCmsPage(id: { eq: $id }) {
      heading
      seoMetaTags {
        tags
      }
      text
    }
  }
`;
export default DefaultPageTemplate;
