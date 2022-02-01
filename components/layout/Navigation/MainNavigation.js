import Image from 'next/image';
import { Fragment } from 'react';
import ContactIcon from './ContactIcon';
import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <Fragment>
    <header className={classes.header}>
        <div className={classes.logo}>
          <Link href='/' passHref>
          <Image src='/svg/lotus-svgrepo-com.svg' alt='lotus image' height={33} width={33} />
          </Link>
      </div>
      <nav>
        <ul>
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
      <ContactIcon />
    </Fragment>
  );
};

export default MainNavigation;
