import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <Fragment>

    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/' passHref>
          <h5>rolotus.com</h5>
        </Link>
      </div>
      <nav>
        <ul>
          {/* <li>
            <div className={classes.call}>
             <Image src='/svg/call-svgrepo-com.svg' alt='phoneicon' height={37} width={20} />
               9777358122
            </div>
          </li> */}
            
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
    </Fragment>
  );
};

export default MainNavigation;
