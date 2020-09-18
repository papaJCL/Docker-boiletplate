import React from 'react';
//import MealEntity from "./MealEntity";

const MealEntry = ({definedMealStruct}) =>{
  return(
    <h1>oof</h1>
  );
};
export default MealEntry;

/*export default class MealEntry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      meal_name: props.meal_name,
      meal_entites: []
    };

    this.addMealEntry = this.addMealEntry.bind(this);
  }



  addMealEntry(meal){
    let meals = [...this.state.meal_entites];
    console.log("");
    meals.push(meal);
    this.setState({meal_entities : meals});
  }

  render(){

    let meals = this.state.meal_entites.map(meal => {

      return(<MealEntity food={meal}/>);
    });

    return(
        <Card>
          <CardTitle>
            {this.state.meal_name}
          </CardTitle>
          <CardBody>
            {meals}
          </CardBody>
          <Button onClick={event => {this.addMealEntry(event)}}>Add Meal Here</Button>
        </Card>
    );
  }
}
*/
