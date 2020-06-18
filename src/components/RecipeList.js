import React, { useState, useEffect } from 'react';

import { authProvider } from '../providers/authProvider';

import RecipeListItem from './RecipeListItem';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [loadingState, setLoadingState] = useState('');
    const [currentError, setCurrentError] = useState();

    useEffect(() => {
        const makeRequest = async () => {
            const token = await authProvider.getAccessToken();
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.accessToken}`
                }
            };
            fetch(`${process.env.REACT_APP_API}/recipes`, options)
                .then(response => response.json())
                .then(response => {
                    setLoadingState('loaded');
                    setRecipes(response);
                })
                .catch(err => {
                    setLoadingState('failed');
                    setCurrentError(err);
                });
        };
        if (loadingState !== '') return;
        makeRequest();
    }, [loadingState]);

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