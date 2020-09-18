import React, { useEffect, useState , Fragment } from "react";
import MealSchema from "./MealSchema";

const MealCalendar = () =>{

//var, function notation with json body
  const [weekInPlanning, setWeekInPlanning] = useState(
    ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"]
  );

  //async once we start saving the state in the database



  let day = weekInPlanning.map(dayElement =>{
    return(<MealSchema dayOfWeek={dayElement}/>);
  });

  return(
    <Fragment>
      <MealSchema dayOfWeek={day}/>
    </Fragment>
  );

};
export default MealCalendar;
