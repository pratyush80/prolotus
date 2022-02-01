import { Fragment } from 'react';
import Head from 'next/head';
import Contact from '../components/Contact/Contact';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <div>
      <Contact />
      </div>
      
    </Fragment>
  );
}

export default HomePage;
