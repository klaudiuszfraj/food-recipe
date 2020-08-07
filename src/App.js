import React, {useEffect, useState} from 'react';
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
        console.log(response);
        const data = await response.json();
        setRecipes(data.hits);
    }

    return (
        <div className='App'>
            <form className='search-form'>
                <input className='search-bar' type="text"/>
                <button className='search-btn'>Search</button>
            </form>
        </div>
    )
}

export default App;
