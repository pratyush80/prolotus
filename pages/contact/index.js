import Head from "next/head";
import { Fragment } from 'react';
import Contact from '../../components/Contact/Contact';


function ContactPage() {
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
};
export default ContactPage;