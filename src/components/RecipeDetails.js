
import React from 'react';

function RecipeDetails(props) {
    const { id } = props.match.params;
    return (
        <div className="container mt-5">
            <div className="row">
                About this recipe ({id})...
            </div>
        </div>
    );
};

export default RecipeDetails;