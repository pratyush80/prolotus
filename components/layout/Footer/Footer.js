import SocialLink from './SocialLink';
import FavouriteRide from './FavouriteRide';
import Sos from './Sos';
import classes from './Footer.module.css';

function Footer() {
  return (
    <section>
      <Sos />
      <FavouriteRide />
      <SocialLink />
    </section>
  )
};

export default Footer;