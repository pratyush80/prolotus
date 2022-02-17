import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';
import ContactIcon from './ContactIcon';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <Fragment>
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          rolotus.com
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <div className={classes.iconcall}>
             <Image src='/svg/call-svgrepo-com.svg' alt='phoneicon' height={37} width={20} />
               9777358122
            </div>
          </li>
            
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      </header>
      <div className={classes.gap}></div>
      <ContactIcon />
    </Fragment>
  );
};

export default MainNavigation;
