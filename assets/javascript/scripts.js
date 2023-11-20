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
            'X-RapidAPI-Key': '20e60768c7msh9595729f27d6c0dp174686jsn662cf9de34dd',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    fetch(url,options)
    .then(response => response.json())
    .then(data => {
        var songs = data.tracks.hits.map(track => track.track.title);
        var avatar = data.tracks.hits[0].track.share.avatar;
        var album = data.tracks.hits[0].track.share.image;
        console.log(songs);
        console.log(avatar);
        console.log(album);
        localStorage.setItem('artist', artist);
        localStorage.setItem('songs', JSON.stringify(songs));
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('album', album)
        window.location.href = 'artist.html';
        })

        var seatgeekurl = 'https://api.seatgeek.com/2/events?client_id='+seatgeekapikey+'&q='+input+'&taxonomies.name=concert';

        fetch(seatgeekurl)
            .then(response => response.json())
            .then(data2 => {
                displayResults(data2);
                localStorage.setItem('concerts', JSON.stringify(data2));
            })
            .catch(error => console.error('Error:', error));
    


    });
    });
    

    
    function getSongList(){
        var query = document.getElementById('searchBox').value;
        var input= encodeURIComponent(query);
        var url = 'https://shazam.p.rapidapi.com/search?term='+input+'&locale=en-US&offset=0';
        var options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '20e60768c7msh9595729f27d6c0dp174686jsn662cf9de34dd',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        
    fetch(url,options)
    .then(response => response.json())
    .then(data => {
        var songs = data.tracks.hits.map(track => track.track.title);
        var avatar = data.tracks.hits[0].track.share.avatar;
        var album = data.tracks.hits[0].track.share.image;
        console.log(songs);
        console.log(avatar);
        console.log(album);
        localStorage.setItem('artist', query);
        localStorage.setItem('songs', JSON.stringify(songs));
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('album', album)
        })
    }
    

var discographybutton = document.querySelector('.hidden');

function searchConcerts() {
    
    var query = document.getElementById('searchBox').value;
    var input= encodeURIComponent(query);
    var url = 'https://api.seatgeek.com/2/events?client_id='+seatgeekapikey+'&q='+input+'&taxonomies.name=concert';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
            getSongList();
            addToSearchHistory(query);
            localStorage.setItem('concerts', JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));

    discographybutton.classList.remove("hidden");    
}

function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.events && data.events.length > 0) {
        data.events.forEach(event => {
            var div = document.createElement('div');
            div.innerHTML = `${event.title}, Venue: ${event.venue.name}, Date: ${event.datetime_local}`;
            resultsDiv.appendChild(div);
            
        });
    } else {
        resultsDiv.innerHTML = 'No concerts found';
    }
}

function addToSearchHistory(query) {
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.unshift(query);
    searchHistory.splice(5);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
}

function displaySearchHistory(){
    var searchHistoryContainer = document.getElementById('search-history');
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    searchHistoryContainer.innerHTML = '';

    if (searchHistory.length > 0) {
        var heading = document.createElement('p');
        heading.textContent = 'Search History:';
        heading.classList.add('history-list');
        searchHistoryContainer.appendChild(heading);

        var list = document.createElement('ul');
        list.classList.add('history-list');

        searchHistory.forEach(query => {
            var listItem = document.createElement('li');
            listItem.textContent = query;
            listItem.addEventListener('click', function (){
                document.getElementById('searchBox').value = query;
                searchConcerts();
            });
            list.appendChild(listItem);
        });

        searchHistoryContainer.appendChild(list);
    } else {
        var noSearchHistory = document.createElement('p');
        noSearchHistory.textContent = 'No Recently Viewed Artists';
        searchHistoryContainer.appendChild(noSearchHistory);
    }
}

displaySearchHistory();


var darkthemebutton = document.getElementById("theme-toggle");

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

darkthemebutton.addEventListener("click", function () {
    toggleDarkMode();
})
    
function getDiscography(){
    window.location.href = 'artist.html';
    getSongList();
}