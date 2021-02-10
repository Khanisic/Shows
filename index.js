async function shows(query){
    let showDetails = await fetch('http://api.tvmaze.com/search/shows?q='+ query)
    showDetails=await showDetails.json();
    let container =document.createElement('div');
    container.setAttribute('class','container');
    document.body.append(container);


for(i = 0;i<9;i++){
    let content = 
`<div class="row p-2 m-3 bg-danger">
<div class="col-4 text-white">Name : ${showDetails[i].show.name}</div>
<div class="col-4 text-white"> Score : ${showDetails[i].score}</div>
<div class="col-4 text-white">Genre : ${showDetails[i].show.genres.toString()}</div>
</div>
<div class="row text-wrap">
<div class="col-4"><img src="${showDetails[i].show.image.medium}" alt=""></div>
<div class="col-8 text-wrap">Summary : ${showDetails[i].show.summary}</div>
</div>
<div class="row">
<div class="col">Status : ${showDetails[i].show.status}</div>
</div>
</div>`
container.innerHTML += content;
}
}

var button = document.getElementById('submitButton');

button.addEventListener('click', function(){
    var search = document.getElementById('searchBar').value;
    shows(search);
});

// function searchShow(){
    
// }



// https://docs.google.com/spreadsheets/d/1U526wHn_exrnA-AUF6-hLua1MpWRVxQxA9H-FWcGMCA/edit?usp=sharing
