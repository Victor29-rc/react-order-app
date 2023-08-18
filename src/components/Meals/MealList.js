import MealItem from "./MealItem";

import classes from './mealList.module.css';
import './mealList.css';

const MealList = ({items}) => {    
    const mealItems = items.map((item) => <MealItem key={item.id} item={item}/>)

    return (
        <ul className={classes.meal_list + ' meal-list'}>
            {mealItems}
        </ul>
    );
}

export default MealList;