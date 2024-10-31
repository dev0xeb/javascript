const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1"
const BASE_URL = "https://api.themoviedb.org/3/"
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const SEARCH_MOVIE_URL = `${BASE_URL}search/movie${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const movieMainContainer = document.querySelector(".movieMainContainer");
console.log(movieMainContainer);


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
        showMovie(data.results)
    } catch (error) {
        console.log(error);
        
    }
}

getMovie(API_URL)

function showMovie(movies) {
    movieMainContainer.innerHTML = '';

    movies.forEach(movie =>{
        const {overview, title, vote_average, poster_path} = movie
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <div>
            <img src="${IMAGE_URL}${poster_path}" alt="">
        </div>
        <div class="titleRating">
            <span>${title}</span>
            <span>${vote_average}</span>
        </div>
        <div class="overview">
            <h2>Overview</h2>
            <p>${overview} </p>
        </div>`

        movieMainContainer.appendChild(movieElement)
    });

}

const searchMovieForm = document.querySelector(`.search`)
searchMovieForm.addEventListener(`keyup`, (event)=>{
    event.preventDefault();
    const inputValue = event.target.value
    console.log(inputValue);
    if(inputValue){
        const searchUrl = SEARCH_MOVIE_URL + "&query=" + inputValue
        getMovie(searchUrl)
    } else{
        getMovie(API_URL)
    }
})