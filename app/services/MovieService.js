import { API_URL, API_KEY } from '@env'

export async function getCategories()  {
    return fetch(API_URL + `genre/movie/list?api_key=${API_KEY}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((json) => {
        return json.genres;
    })
    .catch((error) => console.error(error))
};

