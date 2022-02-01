import classes from './Sos.module.css';
import Image from 'next/image';


function Sos() {
  return (
    <section className={classes.item}>
        <div className={classes.text}>
          <Image src='/svg/sos-svgrepo-com.svg' alt='sos image' height={40} width={16} />
          <h3>Your Safety First
            Keep your loved ones informed about your travel routes or call emergency services when in need
          </h3>
        </div>
        <div className={classes.text}>
          <Image src='/svg/customer-support-help-service-svgrepo-com.svg' alt='sos image' height={50} width={16} />
          <h3> 24/7 Customer Support
            A dedicated 24x7 customer support team always at your service to help solve any problem
          </h3> 
        </div>
    </section>
  )
};

export default Sos; 
