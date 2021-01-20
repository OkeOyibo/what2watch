import { API_URL, API_KEY } from '@env'

export async function getCategories()  {
    try {
        const request = `${API_URL}genre/movie/list?api_key=${API_KEY}`;
        let response = await fetch(request);
        let json = await response.json();
        console.log(request);
        console.log(json);
        return json;
    }
    catch(error) {
        console.log(error);
    }
};


