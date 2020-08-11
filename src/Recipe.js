import React from "react";
import Ingredients from "./Ingerdients";
import FoodComposition from "./FoodComposition ";
import style from './styles/recipe.module.css';

const Recipe = ({title, calories, image, ingredients, timeTotal, weightTotal, totalDaily, totalNutrients})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <Ingredients ingredients={ingredients}/>
            <FoodComposition composition={totalDaily} title='Daily requirements'/>
            <FoodComposition composition={totalNutrients} title='Total nutrition'/>
            <img className={style.image} src={image} alt=""/>
            <p>Time to prepare {timeTotal} min</p>
            <p>Total weight of dish: {weightTotal.toFixed(2)}g witch {calories.toFixed(2)} calories</p>
        </div>
    )
}
export default Recipe;
//todo:: expor style to ingerdients
//test