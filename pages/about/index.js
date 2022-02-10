import Head from "next/head";
import { Fragment } from "react";
import About from "../../components/About/About";

function AboutPage(props) {
  return (
    <Fragment>
      <Head>
        <title>About Page</title>
        <meta name='About page for our company rolotus.com' />
        <link rel="icon" href="/tataace.jpg" />
      </Head>
      <About />
    </Fragment>
  )
};

export default AboutPage;
