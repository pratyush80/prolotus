import classes from './FavouriteRide.module.css';


function FavouriteRide() {
  return (
    <section className={classes.item}>
      <div className={classes.text}>
        <h4> Favourite Routes</h4>
        <ul>
          Angul to Bhubaneswar
        </ul>
        <ul>
          Sambalpur to Bhubaneswar
        </ul>
        <ul>
          Sambalpur to Puri
        </ul>
        <ul>
          Angul to Berhampur
        </ul>
        <ul>
          Angul to Rourkela
        </ul>
      </div>
    </section>
  )
};

export default FavouriteRide; 
