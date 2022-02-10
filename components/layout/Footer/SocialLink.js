import classes from './SocialLink.module.css';
import Image from 'next/image';

function SocialLink() {
  return (
    <section className={classes.main}>
      <div className={classes.item}>
        <div className={classes.text} >
          <a
            href="https://www.facebook.com/Rolotuscom-105038968773893"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className={classes.text}>
            <Image src='/svg/youtube-svgrepo-com.svg' alt='youtube' height={36} width={36} />
            </span>
            </a>
        </div>
       
        <div className={classes.text}>
          <a
            href="https://www.facebook.com/Rolotuscom-105038968773893"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className={classes.text}>
            <Image src='/svg/twitter-svgrepo-com.svg' alt='twitter' height={36} width={36} />
            </span>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/Rolotuscom-105038968773893"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className={classes.text}>
            <Image src='/svg/facebook-svgrepo-com.svg' alt='facebook' height={36} width={36} />
            </span>
          </a>
        </div>
      </div>
      <div className={classes.item}>
       <p>Copyright © 2022 rolotus technology Pvt Ltd. All rights reserved.</p>
      </div>

    </section>
  )
};

export default SocialLink; 
