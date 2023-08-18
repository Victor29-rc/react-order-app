import classes from './addMealButton.module.css';

const AddMealButton = ({onClick}) => {
    return (<button onClick={onClick} className={classes.add_meal_button}>Add</button>);
};

export default AddMealButton;