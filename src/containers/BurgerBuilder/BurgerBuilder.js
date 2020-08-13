import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControlS from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 5.0,
  cheese: 7.0,
  bacon: 3.0,
  meat: 2.0,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    Ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalprice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.Ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.Ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAdditon = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice + priceAdditon;
    this.setState({ totalprice: newPrice, Ingredients: updatedIngredients });
  };

  removeIngredientHnadler = (type) => {
    const oldCount = this.state.Ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.Ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalprice: newPrice, Ingredients: updatedIngredients });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.Ingredients} />
        <BuildControlS
          IngredientAdded={this.addIngredientHandler}
          IngredientRemoved={this.removeIngredientHnadler}
          price={this.state.totalprice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
