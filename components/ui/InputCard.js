import classes from './InputCard.module.css';

function InputCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default InputCard;
