import React from 'react';
import Layout from '../components/organisms/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
