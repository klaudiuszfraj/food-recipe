import React, {useState} from "react";
import style from './ingredinets.module.css'


const Ingredients = ({ingredients}) => {
    const [show, setShow] = useState(style.hide);
    const [arrow, setArrow] = useState('');

    const showList = () => {
        if (show === style.hide) {
            setShow(style.show)
            setArrow(style.reverseArrow)
        } else {
            setShow(style.hide)
            setArrow('')
        }
    }
    const arrowClasses = `${arrow} ${style.arrow}`

    return (<>
            <div className={style.header} onClick={showList}>
                <h3>Ingredients:</h3>
                <div className={arrowClasses}></div>
            </div>
            <ol className={show}>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient.text}</li>)}
            </ol>
        </>
    )
}
export default Ingredients;