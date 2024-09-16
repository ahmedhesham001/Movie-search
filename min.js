const form = document.querySelector("form");
const container = document.querySelector(".img-container");
form.addEventListener("submit", (e) => {
    e.preventDefault(); //disable reloading
    container.innerHTML=''; //remove the latest
    let input = form.querySelector("input").value;
    movieApi(input);
})
async function movieApi (input){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
    const res = await req.json();
    showImage(res);
}
function showImage(movies) {
    for(let movie of movies ){
        let src = movie.show.image.medium;
        let url = movie.show.url;
        if(src){
            const a =document.createElement('a');
            a.href = url;
            a.target = '_blank';
            const img = document.createElement('img');
            img.src = src;
            a.appendChild(img);
            container.appendChild(a);
        }
    }
}