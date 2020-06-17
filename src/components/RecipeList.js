import React, { useState, useEffect } from 'react';

import RecipeListItem from './RecipeListItem';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [loadingState, setLoadingState] = useState('');
    const [currentError, setCurrentError] = useState();

    useEffect(() => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        fetch(`${process.env.REACT_APP_API}/GetRecipes`, options)
            .then(response => response.json())
            .then(response => {
                setLoadingState('loaded');
                setRecipes(response);
            })
            .catch(err => {
                setLoadingState('failed');
                setCurrentError(err);
            });
    }, []);

    return (
        <div className="row">
            {(loadingState === 'loaded') ? (
                recipes.map(recipe => {
                    return (<RecipeListItem key={recipe.id} item={recipe} />);
                })
            ) : (
                    (loadingState === 'failed') ? (
                        <div>
                            Something went wrong...
                            <div>{currentError ? currentError.message : ''}</div>
                        </div>
                    ) : (
                            <div>Fetching recipes...</div>
                        )
                )
            }
        </div>
    );
};

export default RecipeList;