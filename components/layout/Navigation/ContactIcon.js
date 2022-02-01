import classes from './ContactIcon.module.css';
import Image from 'next/image';


function ContactIcon() {
  return (
    <section className={classes.main}>
      <div className={classes.image}>
        <h3>Call us on</h3>
       <Image src='/svg/phone-call-svgrepo-com.svg' alt='phoneicon' height={37} width={20} />
      </div>
      <div>
        <h3>9777358122, 8018924479</h3>
      </div>
    </section>
    
  )
};

export default ContactIcon; 
