import classes from './ContactFile.module.css';
import Image from 'next/image';
import { Fragment } from 'react';

function ContactFile() {
  return (
    <Fragment>
     <section className={classes.item}>
        <div className={classes.text}>
          <ul>
            <h3>For Any Query Contact US</h3>
          </ul>
          <ul>
            <p>Contact Number: 9777358122</p>
          </ul>
          <ul>
            <p>Mail us: rolotus.customer@gmail.com</p>
          </ul>
        </div>
      </section>
      <div className={classes.gap}></div>
      <div className={classes.image}>
       <Image src='/full.jpg' alt='fullImage' height={600} width={2000} />
      </div>
    </Fragment>
  )
};

export default ContactFile; 
