const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1"
const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_URL = `${BASE_URL}popular?${API_KEY}`;

console.log(API_URL);

// const getMovie = (url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data) => {console.log(data)})
//     .catch((error) => console.log(error))
// }

const getMovie = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.results)

    } catch (error) {
        console.log(error);
        
    }
}

getMovie(API_URL)