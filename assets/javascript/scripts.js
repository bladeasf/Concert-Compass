var seatgeekapikey = 'MzgyNjQzMjl8MTY5OTkyMTI0MC4wMjk5NDU';
var artistbutton = document.querySelectorAll('.redirect');

artistbutton.forEach(function(artistbutton) {

artistbutton.addEventListener("click", function () {
        var artist = artistbutton.querySelector('.description').getAttribute('data-name');
        console.log(artist);


    var input = encodeURIComponent(artist);
    var url = 'https://shazam.p.rapidapi.com/search?term='+input+'&locale=en-US&offset=0';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd895bfd894msh4060f91589112cap1de30fjsn0d438392944d',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
fetch(url,options)
.then(response => response.json())
.then(data => {
    var songs = data.tracks.hits.map(track => track.track.title);
    console.log(songs)
    localStorage.setItem('artist', artist);
    localStorage.setItem('songs', JSON.stringify(songs));

    })

});
});
   








function getSongList(){
    var query = document.getElementById('searchBox').value;
    var input= encodeURIComponent(query);
    var url = 'https://shazam.p.rapidapi.com/search?term='+input+'&locale=en-US&offset=0';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd895bfd894msh4060f91589112cap1de30fjsn0d438392944d',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
fetch(url,options)
.then(response => response.json())
.then(data => {
    var songs = data.tracks.hits.map(track => track.track.title);
    console.log(songs)
    localStorage.setItem('artist', query);
    localStorage.setItem('songs', JSON.stringify(songs));
    })
}



function searchConcerts() {
    var query = document.getElementById('searchBox').value;
    var input= encodeURIComponent(query);
    var url = 'https://api.seatgeek.com/2/events?client_id='+seatgeekapikey+'&q='+input+'&taxonomies.name=concert';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data) 
            getSongList()
        })
        .catch(error => console.error('Error:', error));

        
}

function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.events && data.events.length > 0) {
        data.events.forEach(event => {
            var div = document.createElement('div');
            div.innerHTML = `Name: ${event.title}, Venue: ${event.venue.name}, Date: ${event.datetime_local}`;
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.innerHTML = 'No concerts found';
    }
}



var darkthemebutton = document.getElementById("theme-toggle");

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

darkthemebutton.addEventListener("click", function () {
    toggleDarkMode();
})