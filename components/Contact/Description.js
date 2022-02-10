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
          </div>
          <div className={classes.text}>
            <ul>
              <li>max-distance covered 100km</li>
              <li>12-14 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
            <Image src='/mahindra-pickup.png' alt='phoneicon' height={210} width={280} />
          </div>
          <div className={classes.text}>
            <ul>
              <li>max-distance covered 150km</li>
              <li>14-16 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/pickup_1.7t.jpg' alt='phoneicon' height={210} width={280} />
          </div>
          <div className={classes.text}>
          <ul>
              <li>max-distance covered 200km</li>
              <li>14-16 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>
        </div>

        <div className={classes.main}>
        <div className={classes.image}>
          <Image src='/mega-xl.jpg' alt='phoneicon' height={210} width={280} />
          </div>

          <div className={classes.text}>
          <ul>
              <li>max-distance covered 250km</li>
              <li>12-14 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness  logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>

        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/tata-yodha.jpg' alt='phoneicon' height={210} width={280} />
          </div>
          <div className={classes.text}>
            <ul>
            <li>max-distance covered 300km</li>
              <li>15-17 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.image}>
          <Image src='/tataace.jpg' alt='phoneicon' height={210} width={280} />
          </div>
          <div className={classes.text}>
            <ul>
              <li>max-distance covered 350km</li>
              <li>12-14 ruppes for 1 km</li>
              <li>service Provided for Single way</li>
              <li>Service provided for Bussiness logistics, Construction Materials, furniture logistics, House shifting </li>
            </ul>
          </div>
          </div>
      </section>
    </Fragment>
  )
};

export default Description; 
