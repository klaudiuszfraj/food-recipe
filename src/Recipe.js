import React from "react";
import Ingredients from "./Ingerdients";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <Ingredients ingredients={ingredients}/>
            <p>Calories - {calories.toFixed(2)}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
export default Recipe;
//todo:: expor style to ingerdients