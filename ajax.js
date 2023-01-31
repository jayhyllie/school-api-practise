let ajax = new XMLHttpRequest();

ajax.open('get', 'https://pokeapi.co/api/v2/pokemon');

ajax.onreadystatechange = function() {
    if(ajax.status == 200 && ajax.readyState == 4){
        //vi fick lego från mamma
        console.log(ajax.responseText);
        // Göra om JSON data till vanligt object
        let data = JSON.parse(ajax.responseText)
        console.log(data.results[0]);
    }
}

/* ajax.send(); */

// fetch

