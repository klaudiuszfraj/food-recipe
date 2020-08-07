import React, {useEffect, useState} from 'react';
import Recipe  from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = '0bbf8ae4';
    const APP_KEY = '87e529f9c351026777db3caf7f5f4234 ';



    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query ])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    }
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e=>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className='App'>
            <form onSubmit={getSearch} className='search-form' >
                <input className='search-bar' type="text" value={search} onChange={updateSearch} />
                <button className='search-btn'>Search</button>
            </form>
            {recipes.map((recipe, index) => <Recipe key={index}
                                                    title={recipe.recipe.label}
                                                    calories={recipe.recipe.calories}
                                                    image={recipe.recipe.image}
                                                    ingredients={recipe.recipe.ingredients} />)}
        </div>
    )
}

export default App;
