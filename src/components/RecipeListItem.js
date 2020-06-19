import React from 'react';
import { Link } from "react-router-dom";

function RecipeListItem(props) {

    return (
        <div className="card p-3" >
            <img className="card-img-top img-thumbnail" src={props.item.images[0].url} alt={props.item.images[0].alt} />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{props.item.categories.join(', ')}</p>
                <p className="card-text"><small className="text-muted">Time Needs: {props.item.time.total}</small></p>
                <div className="card-body">
                    <Link to={`/recipes/${props.item.id}`}>View Full Recipe</Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeListItem;
