import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "1eb5d637";
  const APP_KEY = "41f110548302c55cdabe03a9281347d9";
  const exampleReq = `https://api.edamam.com/search?q=tomato&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      {recipes.map(recipe => (
        <Recipe label={recipe.recipe.label} image={recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;
