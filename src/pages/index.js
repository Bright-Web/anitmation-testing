import * as React from 'react';
import Layout from '../components/global/layout';
import Landscape from '../components/landscape/landscape';


const IndexPage = () => {
  return (
    <Layout>
      <Landscape />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Animations</title>
    <meta
      name="description"
      content="Antons animation testing"
    />
  </>
);
