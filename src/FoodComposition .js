import React, {useState} from "react";
import style from "./styles/additionalInfo.module.css";


const FoodComposition = ({composition, title}) => {

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
    const fff = Object.entries(composition).map(el =><li key={el[0]}>{el[1].label} - {el[1].quantity.toFixed(2)} {el[1].unit}</li>
    );
    return <>
        <div className={style.header} onClick={showList}>
            <h3>{title}:</h3>
            <div className={arrowClasses}></div>
        </div>
        <ol className={listClasses}>
            {fff}
        </ol>
    </>
}
export default FoodComposition;