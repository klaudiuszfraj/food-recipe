import React from "react";
import Ingredients from "./Ingerdients";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, timeTotal, weightTotal})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <Ingredients ingredients={ingredients}/>
            <img className={style.image} src={image} alt=""/>
            <p>Time to prepare {timeTotal} min</p>
            <p>Total weight of dish: {weightTotal.toFixed(2)}g witch {calories.toFixed(2)} calories</p>
        </div>
    )
}
export default Recipe;
//todo:: expor style to ingerdients