import { Fragment } from 'react';
import Head from 'next/head';
import Contact from '../components/Contact/Contact';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Page for rolotus.com</title>
        <meta
          name='description'
          content='A complete logistic service service '
        />
        <link rel="icon" href="/tataace.jpg" />
      </Head>
      <div>
      <Contact />
      </div>
      
    </Fragment>
  );
}

export default HomePage;
