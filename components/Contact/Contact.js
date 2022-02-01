import classes from './Contact.module.css';
import { Fragment } from 'react';
import Description from './Description';
import ContactFile from './ContactFile';

function Contact() {
  return (
    <Fragment>
      <Description />
      <ContactFile />
    </Fragment>
    
  )
};

export default Contact; 
