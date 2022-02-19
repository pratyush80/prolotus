import classes from './ContactFile.module.css';
import Image from 'next/image';
import { Fragment } from 'react';

function ContactFile() {
  return (
    <Fragment>
     <section className={classes.item}>
        <ul>
          <h3>For Any Query Contact US</h3>
        </ul>
        <ul>
          <h5>Contact Number: 9777358122</h5>
        </ul>
        <ul>
          <h5>Mail us: rolotus.customer@gmail.com</h5>
        </ul>
      </section>
      <div className={classes.gap}></div>
      <div className={classes.image}>
       <Image src='/full.jpg' alt='fullImage' height={600} width={2000} />
      </div>
    </Fragment>
  )
};

export default ContactFile; 
