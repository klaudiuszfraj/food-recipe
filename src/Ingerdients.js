import React, {useState} from "react";
import style from './ingredinets.module.css'


const Ingredients = ({ingredients}) => {
    const [show, setShow] = useState(style.hide)

    const showList = ()=>{
        if (show === style.hide){
            setShow(style.show)
        }else {
            setShow(style.hide)
        }
    }

    return (<>
            <h3 onClick={showList}>Ingredients:</h3>
            <ol className={show}>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient.text}</li>)}
            </ol>
        </>
    )
}
export default Ingredients;