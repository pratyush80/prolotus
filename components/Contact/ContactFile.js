import classes from './ContactFile.module.css';
import Image from 'next/image';

function ContactFile() {
  return (
    <section className={classes.item}>
      <div className={classes.main}>
        <ul>
          <h3>For Any Query Contact US</h3>
        </ul>
        <ul>
          <p>Contact Number: 9777358122, 8018924479</p>
        </ul>
        <ul>
          <p>Mail us: pratishu3@gmail.com, pratishurana@gmail.com</p>
        </ul>
      </div>

    </section>
  )
};

export default ContactFile; 
