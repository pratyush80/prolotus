import classes from './ContactIcon.module.css';
import Image from 'next/image';
import { Fragment } from 'react';


function ContactIcon() {
  return (
    <Fragment>
      <section className={classes.scrollContainer}>
        <div className={classes.scrollText}> 
          <h3>We have covered whole ODISHA with cheap price. </h3>
        </div>
      </section>
    </Fragment>
  )
};

export default ContactIcon; 
