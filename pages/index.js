import { Fragment } from 'react';
import Head from 'next/head';
import Contact from '../components/Home/Contact';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Page for rolotus.com</title>
        <meta
          name='description'
          content='A complete logistic service service for Angul to districts to other districts of ODISHA at low price and 90 percentage ontime service provided '
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
