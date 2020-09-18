import React, { useEffect, useState , Fragment } from "react";
import MealEntry from "./MealEntry";


const MealSchema = ({dayOfWeek}) =>{

  const[currentDay, setCurrentDay] = useState({
      type : {dayOfWeek},
      date : "9/27"
  });

  const[mealEntries, setMealEntries] = useState({
    definedMeals : ["Breakfast", "Lunch", "Dinner"]
  });

  let mealGrid = mealEntries.definedMeals.map(mealType =>{
    return (
      <Fragment>
        <MealEntry mealType={mealType}/>);
      </Fragment>
  )});

  return(
    <Fragment>
      {mealGrid}
    </Fragment>
  );
};
export default MealSchema;

/*export default class MealSchema extends Component{
  constructor(props){
    super(props);
    this.state= {
      day: props.dayOfWeek,
      meals : ['Breakfast', 'Lunch', 'Dinner'],
      calories : 0
    }
  }

  createSnacks(){

  }

  render(){


    let meals = this.state.meals.map(meal => {
      return (<MealEntry meal_name={meal}/>);
    });

    return(
        <Card>
          {this.state.day}
          <CardBody>
            {meals}
          </CardBody>
        </Card>
    );
  }
}*/
