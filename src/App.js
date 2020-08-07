import React, {useEffect, useState} from 'react';
import Recipe  from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = '0bbf8ae4';
    const APP_KEY = '87e529f9c351026777db3caf7f5f4234 ';



    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    }

    return (
        <div className='App'>
            <form className='search-form'>
                <input className='search-bar' type="text"/>
                <button className='search-btn'>Search</button>
            </form>
            {recipes.map((recipe, index) => <Recipe key={index}
                                                    title={recipe.recipe.label}
                                                    calories={recipe.recipe.calories}
                                                    image={recipe.recipe.image} />)}
        </div>
    )
}

export default App;
