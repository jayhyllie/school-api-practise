async function getPokes() {
    try {
        let result = await fetch('https://pokeapi.co/api/v2/pokemon')

        let data = await result.json();
        console.log(data.results[0]);
    } catch (error) {
        //console.error visar röd error bakgrund
        console.error(error);
    }
}

/* getPokes(); */

//fetch med .then

function pokesWithThen() {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(result => result.json())
        .then(data => console.log(data.results[0]))
        //.catch om error hittas
        .catch(error => console.log(error))
}

/* pokesWithThen(); */

/*---------- SÖKMOTOR ------------*/

const ACCESS_KEY = 'Y6uXUr-6Pj6B0Sw2d6r1Q01KIsf_dXpHaPYvns3York';
const SECRET_KEY = 'ldiPmwuTwvyT5x6qthvC6wFNz40fWAgdE5CpevtdV_k';
const start_URL = 'https://api.unsplash.com';
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search--input');
// eventListener på vår sökknapp
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getPhotos(searchInput.value);
})

function getPhotos(searchTerm) {
    // '&count=3' betyder att vi skickar in en parameter där vi vill ha 10 st bilder
    fetch(start_URL
        + '/search/photos?client_id=' + ACCESS_KEY
        + '&per_page=3&query=' + searchTerm).then(data => data.json()).then((data) => {
            // får du ett promise, addera await 

            // rensar sökresultat för varje click, om resultat redan finns
            document.querySelector('.image-container').innerHTML = "";

            // fetchen returnerar en lista med object där vi får vår information
            data.results.forEach(image => {
                let img = document.createElement('img')
                img.setAttribute('src', image.urls.small);
                img.setAttribute('alt', image.alt_description);
                // appenda för att addera varje img till section som existerar i dokumentet
                document.querySelector('.image-container').appendChild(img);
            });
        }).catch((error) => {
            console.log(error);
        });
}

