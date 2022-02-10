import Head from "next/head";
import { Fragment } from 'react';
import Contact from '../../components/Contact/Contact';


function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Page for rolotus.com</title>
        <meta
          name='description'
          content='A contact Page for our company!'
        />
        <link rel="icon" href="/tataace.jpg" />
      </Head>
      <div>
        <Contact />
      </div>
    </Fragment>
  );
};
export default ContactPage;