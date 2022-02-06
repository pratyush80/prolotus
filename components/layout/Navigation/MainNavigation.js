import Link from 'next/link';
import { Fragment } from 'react';
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
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/new-meetup'>NewMeetup</Link>
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
