import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.7,
  bacon: 1,
  meat: 1.5
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 1
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    //State should be updated in an immutable way: I distribute the properties of the state in a new object//
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabled = {disabledInfo}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
