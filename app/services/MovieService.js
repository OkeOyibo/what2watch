import { API_URL, API_KEY } from '@env'

export async function getCategories()  {
    try {
        const request = `${API_URL}genre/movie/list?api_key=${API_KEY}`;
        
        let response = await fetch(request);
        let json = await response.json();
        return json;
    }
    catch(error) {
        console.log(error);
    }
};

export async function discoverMovies(values) {
    try {
        const page = Math.floor(Math.random() * 500) + 1;
        const genres = values;

        const request = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genres}&page=${page}`;
        
        let response = await fetch(request);
        let json = await response.json();

        return json;
    }
    catch(error) {
        console.log(error)
    }
}


