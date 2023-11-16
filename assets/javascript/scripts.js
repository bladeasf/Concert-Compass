var seatgeekapikey = 'MzgyNjQzMjl8MTY5OTkyMTI0MC4wMjk5NDU';
var geniusapikey = 'QX7VONFEegZw3fbZ88_MxFJ7mnQknQFvRn8Qc9-5ykRJtZ7dNn5xOpZhx5OdoLQW'
var song = 'Despacito'
var geniusaccesstoken = 'bV013_46w1epTzjtcBvYXo509Yyu4RG28fcXDkW6KoBN2gwumQHBCQ4DfhdGfR67'
var name = 'Justin Bieber'




function searchConcerts() {
    var query = document.getElementById('searchBox').value;
    var apiKey = 'MzgyNjQzMjl8MTY5OTkyMTI0MC4wMjk5NDU'; 
    var url = `https://api.seatgeek.com/2/events?client_id=${apiKey}&q=${encodeURIComponent(query)}&taxonomies.name=concert`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
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


// function test(){
//     var url ='https://api.seatgeek.com/2/performers/266?client_id=MzgyNjQzMjl8MTY5OTkyMTI0MC4wMjk5NDU'
//     fetch(url)
//           .then(response => response.json())
//           .then(data => {
//             // var topartist = {
//             //     name: data.name,
//             //     image: data.image,
//             //     genre: data.genres
//             // };
//             // console.log(topartist);

//             const sortedPerformers = data.performers.sort((a, b) => b.score - a.score);


//     const top3PerformerIds = sortedPerformers.slice(0, 3).map(performer => performer.id);
//     console.log(top3PerformerIds);

//         })

// }

// test();


// function test2(){
//     var geniusurl = 'https://api.genius.com/search?q='+name;
//     fetch(geniusurl, {
//         headers: {
//             'Authorization': 'Bearer '+geniusapikey,
//         },
//     })
//     .then(response => response.json())
//     .then(data => {




//     }
// }


/*
function trendingartist(){
    var url = 'https://api.seatgeek.com/2/performers?client_id=';
    var topartist = {
        'client_id': seatgeekapikey,
        'sort': 'score.desc',
      };

      const url = new URL(url);
      url.search = new URLSearchParams(topartist);
      
      fetch(url)
      .then(response => response.json())
      .then(data => {
        // Perform your own sorting based on performer score
        var sortedPerformers = data.performers.sort((a, b) => b.score - a.score);
    
        console.log('Sorted Performers:', sortedPerformers);
        // Process the sorted performers list as needed
      })
      .catch(error => console.error('Error:', error));
      
}

function upcomingconcerts(){
    var apiurl = '';
    var upcomingconcerts{
        upcomingconcerts1 = '',
        upcomingconcerts2 = '',
        upcomingconcerts3 = ''
    }
}

function artistinfo(){
    var apiurl = ''
    var artist = {
        name : "",
        lastestAlbum: "",
        topsong: ""
    }
}

function top100artists(){
    var apiurl = ''
    var artists = {
        namestring: ''
    }
  
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode")
}
//TO DO: 
// TO DO: Code for artist.html functionality -- When I press the button(s) "Music" and "Shows" only one is selected and only one card is shown (ie Music ==> Newest Album + songs)

*/
var darkthemebutton = document.getElementById("theme-toggle");

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

darkthemebutton.addEventListener("click", function () {
    toggleDarkMode();
})