const mockRecipes = [
    {
        "id": 1,
        "name": "Delicious Drink",
        "short_description": "Get refreshed this summer",
        "images": [
            {
                "url": "https://sharingthefoodwelove.files.wordpress.com/2013/11/glass-of-water-1-1.jpg", "alt": "A glass of water"
            }
        ],
        "time": {
            "total": "1 minute"
        },
        "yield": 4,
        "categories": ["Main Dish"],
        "ingredients": [{"name": "Water", "quantity": "lots"}],
        "instructions": [{"text": "Put water in a glass"}]
    },
    {
        "id": 2,
        "name": "Delicious Drink 2",
        "short_description": "Get refreshed this summer",
        "images": [
            {
                "url": "https://sharingthefoodwelove.files.wordpress.com/2013/11/glass-of-water-1-1.jpg", "alt": "A glass of water"
            }
        ],
        "time": {
            "total": "1 minute"
        },
        "yield": 4,
        "categories": ["Main Dish"],
        "ingredients": [{"name": "Water", "quantity": "lots"}],
        "instructions": [{"text": "Put water in a glass"}]
    },
    {
        "id": 3,
        "name": "Delicious Drink 3",
        "short_description": "Get refreshed this summer",
        "images": [
            {
                "url": "https://sharingthefoodwelove.files.wordpress.com/2013/11/glass-of-water-1-1.jpg", "alt": "A glass of water"
            }
        ],
        "time": {
            "total": "1 minute"
        },
        "yield": 4,
        "categories": ["Main Dish"],
        "ingredients": [{"name": "Water", "quantity": "lots"}],
        "instructions": [{"text": "Put water in a glass"}]
    }
]

module.exports = async function (context, req) {
    context.res = {
        body: mockRecipes
    };
};
