import React from 'react';

function RecipeListItem(props) {

    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single_recepie text-center">
                <div className="recepie_thumb">
                    <img src={props.item.images[0].url} alt={props.item.images[0].alt} />
                </div>
                <h3>{props.item.name}</h3>
                <span>{props.item.categories.join(', ')}</span>
                <p>Time Needs: {props.item.time.total}</p>
                <a href="/" className="line_btn">View Full Recipe</a>
            </div>
        </div>
    );

}

export default RecipeListItem;
