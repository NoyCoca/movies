class Movies {
    
}


let baceApi = "https://api.tvmaze.com/search/shows?q="

function printMovie(parsm) {
    return fetch(`${baceApi}${parsm}`)
        .then(res => res.json())
}
let printM;
async function movie(param) {
    try { 
        main.innerHTML =""
        logImg.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif"
        printM = await printMovie(param);
        if (printM.length == 0) {
            main.innerHTML = `<h2> No match </h2>`
        }
        printM.forEach(movie => {
            main.innerHTML += `<div class ="movieCard"><h2>${movie.show.name}</h2>
            <p>${movie.show.genres} </p>
            <img src=${movie.show.image.medium}>
            <p> <a href=${movie.show.url} target="_blank">movie website</a></p></div>`
        });
    }
    catch (rej) {
        let reject = [];
        reject.push(rej)
    }
    finally {
        logImg.src = ""
    }
}

function singUp() {
    main.innerHTML =   `<div class="container">
  <h2>sign up</h2>
  <form>
  <div class="form-group">
      <label for="email">Uesr name:</label>
      <input type="text" class="form-control" id="username" placeholder="User name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
    </div>
    <div class="form-group">
      <label for="pwd">Password confirm:</label>
      <input type="password" class="form-control" id="pwdcon" placeholder="Enter password" name="pswd">
      <p id="pwdchack"> </p>
    </div>
    </form>
    <button type="submit" class="btn btn-primary" onclick="infoSand()">SAND</button>
  
</div>`

}
function infoSand() {
    if(pwd.value == pwdcon.value){
        pwdchack.innerHTML =""
        main.innerHTML = `<h2> You will receive information for confirm</h2>`
    }
    else{
        pwdchack.innerHTML = `The passwords are not the same`
    }
}

