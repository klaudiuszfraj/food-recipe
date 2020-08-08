import React from "react";
import style from './ingredinets.module.css'


const Ingredients = ({ingredients}) => {
    return (<>
            <h3>Ingredients:</h3>
            <ol className={style.ingredientsList}>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient.text}</li>)}
            </ol>
        </>
    )
}
export default Ingredients;