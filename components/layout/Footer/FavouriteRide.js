import classes from './FavouriteRide.module.css';


function FavouriteRide() {
  return (
    <section className={classes.item}>
      <div className={classes.text}>
        <h4>Northern Odisha</h4>
        <ul>
          Angul to Bhubaneswar
        </ul>
        <ul>
          Angul to Sambalpur
        </ul>
        <ul>
          Angul to Puri
        </ul>
        <ul>
          Angul to rourkela
        </ul>
        <ul>
          Angul to Balangir
        </ul>
      </div>
      <div className={classes.text}>
        <h4>Southern Odisha</h4>
        <ul>
         Sambalpur to Bhubaneswar
        </ul>
        <ul>
          Sambalpur to Puri
        </ul>
        <ul>
          Sambalpur to Baleswar
        </ul>
        <ul>
          Sambalpur to Cuttack
        </ul>
        <ul>
          Sambalpur to Dhenkanal
        </ul>
      </div>
      <div className={classes.text}>
        <h4>Eastrn Odisha</h4>
        <ul>
          Dhenkanal to Bhubaneswar
        </ul>
        <ul>
          Dhenkanal to SambalPur
        </ul>
        <ul>
          Dhenkanal to Puri
        </ul>
        <ul>
          Dhenkanal to Boudh
        </ul>
        <ul>
          Dhenkanal to Sonepur
        </ul>
      </div>
      <div className={classes.text}>
        <h4>Westrn Odisha</h4>
        <ul>
          Boudh to Sambalpur
        </ul>
        <ul>
          Boudh to Jharsuguda
        </ul>
        <ul>
          Boudh to Baleswar
        </ul>
        <ul>
          Deogarh to Boudh
        </ul>
        <ul>
          Deogarh to Sonepur
        </ul>
      </div>
    </section>
  )
};

export default FavouriteRide; 
