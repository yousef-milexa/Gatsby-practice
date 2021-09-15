import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const DefaultPageTemplate = () => (
    <Layout>
        <div>
            <h2>title</h2>
            <h3>description</h3>
        </div>
    </Layout>
);

export const DefaultPageTemplateQuery = graphql`
    query DefaultPageTemplateQuery {
        allSitePage {
        edges {
            node {
            id
            }
        }
        }
    }
`
