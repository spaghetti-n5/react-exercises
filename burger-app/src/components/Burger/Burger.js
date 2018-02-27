import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  //console.log(props); I do not have access to the Route object, if needed use { withRoute } component

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_,i) => {
          return <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    })
    .reduce((arr,el) => {
      return arr.concat(el)
    }, []);
    //console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add some ingredients!</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
