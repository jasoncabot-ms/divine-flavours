const axios = require('axios');

module.exports = async function (context, req) {
    axios.defaults.baseURL = process.env.CDS_ENDPOINT;
    axios.defaults.headers.common['Authorization'] = req.headers.authorization;
    try {
        const response = await axios.get('/df_dishs', {
            headers: {
                'Accept': 'application/json',
                'OData-MaxVersion': '4.0',
                'OData-Version': '4.0',
            },
            params: {
                "$select": 'df_dishid,df_name'
            }
        });

        // Convert the dish odata into our model
        const recipes = response.data.value.map(bag => {
            return {
                "id": bag.df_dishid,
                "name": bag.df_name,
                "short_description": "(PLACEHOLDER) Get refreshed this summer",
                "images": [
                    {
                        "url": "https://sharingthefoodwelove.files.wordpress.com/2013/11/glass-of-water-1-1.jpg", "alt": "A glass of water"
                    }
                ],
                "time": {
                    "total": "(PLACEHOLDER) 1 minute"
                },
                "yield": 4,
                "categories": ["(PLACEHOLDER) Main Dish"],
                "ingredients": [{ "name": "(PLACEHOLDER) Water", "quantity": "lots" }],
                "instructions": [{ "text": "(PLACEHOLDER) Put water in a glass" }]
            }
        });

        context.res = {
            body: recipes
        }
    } catch (error) {
        if (error.response) {
            context.res = {
                status: error.response.status,
                body: {
                    data: error.response.data,
                    status: error.response.status,
                    headers: error.response.headers,
                }
            }
        } else if (error.request) {
            context.res = {
                status: 500,
                body: error.request
            }
        } else {
            context.res = {
                status: 500,
                body: error.message
            }
        }
    }
};
