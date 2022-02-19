import { Fragment } from 'react';
import Description from './Description';
import ContactFile from './ContactFile';
import NavCarousel from './NavCarousel';

function Contact() {
  return (
    <Fragment>
      <NavCarousel />
      <Description />
      <ContactFile />
    </Fragment>
  )
};

export default Contact; 
