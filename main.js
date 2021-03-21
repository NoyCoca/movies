let baceApi = "https://api.tvmaze.com/search/shows?q="

function printMovie(parsm) {
    return fetch(`${baceApi}${parsm}`)
        .then(res => res.json())
}
let printM;
async function movie() {
    try {
        logImg.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif"
        printM = await printMovie(inputId.value);
        if (printM.length == 0) {
            noMatch.innerHTML = `<div>No match </div>`
            printMovies.innerHTML = " "
        }
        printM.forEach(movie => {
            printMovies.innerHTML += `<div class ="movieCard"><h2>${movie.show.name}</h2>
            <p>${movie.show.genres} </p>
            <img src=${movie.show.image.medium}>
            <p> <a href=${movie.show.url} target="_blank">movie website</a></p></div>`

            noMatch.innerHTML = " "
        });
    }
    catch (rej) {
        noMatch.innerHTML = `<div>No match </div>`
        printMovies.innerHTML = " "
    }
    finally {
        logImg.src = ""
    }
}

