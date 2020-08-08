import React, {useState} from "react";
import style from './ingredinets.module.css'


const Ingredients = ({ingredients}) => {
    const [show, setShow] = useState(style.hide);
    const [arrow, setArrow] = useState('');

    const showList = () => {
        if (show === style.hide) {
            setShow('')
            setArrow(style.reverseArrow)
        } else {
            setShow(style.hide)
            setArrow('')
        }
    }
    const arrowClasses = `${style.arrow} ${arrow}`
    const listClasses = `${style.ingredientsList} ${show}`

    return (<>
            <div className={style.header} onClick={showList}>
                <h3>Ingredients:</h3>
                <div className={arrowClasses}></div>
            </div>
            <ol className={listClasses}>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient.text}</li>)}
            </ol>
        </>
    )
}
export default Ingredients;