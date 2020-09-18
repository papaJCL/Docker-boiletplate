import React, {Component} from 'react';
import {Card} from 'reactstrap';

export default class MealEntity extends Component{
  constructor(props){
    super(props);
    this.state = {
      food : this.props.food
    };
  }

  render(){

    return(
        <Card>
          {this.state.food}
        </Card>
    );
  }

}
