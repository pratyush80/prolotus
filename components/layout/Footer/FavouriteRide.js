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
          Dhenkanal to Rourkela
        </ul>
      </div>
      <div className={classes.text}>
        <h4>Eastrn Odisha</h4>
        <ul>
          Dhenkanal to Bhubaneswar
        </ul>
        <ul>
          Dhenkanal to Khurdha
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
          Cuttack to Sambalpur
        </ul>
        <ul>
          Cuttack to Jharsuguda
        </ul>
        <ul>
          Cuttack to Baleswar
        </ul>
        <ul>
          Cuttack to Boudh
        </ul>
        <ul>
          Cuttack to Sonepur
        </ul>
      </div>
    </section>
  )
};

export default FavouriteRide; 
