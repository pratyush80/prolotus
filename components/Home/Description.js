import classes from './Description.module.css';
import Image from 'next/image';
import { Fragment } from 'react';

function Description() {
  return (
    <Fragment>
      <section className={classes.item}>
        <div className={classes.main}>
          <div className={classes.image}>
           <Image src='/tataace.jpg' alt='phoneicon' height={210} width={280} />
           <h5>TATA ACE</h5>
          </div>
          <div className={classes.text}>
            <ul>
              <li><h4>MAX-distance 300km</h4></li>
              <li><h5>₹12 ruppes for every single kilometer</h5></li>
            </ul>
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
            <Image src='/pickup_1.7t.jpg' alt='phoneicon' height={210} width={280} />
             <h5>PICK-UP</h5>
          </div>
          <div className={classes.text}>
            
            <ul>
              <li><h4>MAX-distance 500km</h4></li>
              <li><h5>₹15 ruppes for every single kilometer</h5></li>
            </ul>          
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/tata-yodha.jpg' alt='phoneicon' height={210} width={280} />
          <h5>YODHA</h5>
          </div>
          <div className={classes.text}>
       
          <ul>
              <li><h4>MAX-distance 500km</h4></li>
              <li><h5>₹14 ruppes for every single kilometer</h5></li>
            </ul>       
          </div>
        </div>

        <div className={classes.main}>
        <div className={classes.image}>
          <Image src='/mega-xl.jpg' alt='phoneicon' height={210} width={280} />
          <h5>MEGA-XL</h5>
          </div>

          <div className={classes.text}>
          
          <ul>
              <li><h4>MAX-distance 400km</h4></li>
              <li><h5>₹13 ruppes for every single kilometer</h5></li>
            </ul>           
          </div>

        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/auto.webp' alt='phoneicon' height={210} width={280} />
          <h5>AUTO</h5>
          </div>
          <div className={classes.text}>
           
            <ul>
              <li><h4>MAX-distance 100km</h4></li>
              <li><h5>₹9 ruppes for every single kilometer</h5></li>
            </ul>           
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/3wheel.webp' alt='phoneicon' height={210} width={280} />
          <h5>3wheel</h5>
          </div>
          <div className={classes.text}>
           
            <ul>
              <li><h4>MAX-distance 100km</h4></li>
              <li><h5>₹8 ruppes for every single kilometer</h5></li>
            </ul>           
          </div>
          </div>
      </section>
    </Fragment>
  )
};

export default Description; 
