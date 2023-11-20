var musicbutton = document.getElementById("music-btn");
var showsbutton = document.getElementById("shows-btn");

populateSongList();

function populateSongList(){
var storedArtist = localStorage.getItem('artist');
var storedSongs = JSON.parse(localStorage.getItem('songs'));
var storedAvatar = localStorage.getItem('avatar');
var storedAlbum = localStorage.getItem('album');
console.log("Stored Artist:", storedArtist);
console.log("Stored Songs:", storedSongs);
console.log("Stored Avatar:", storedAvatar);
console.log("Stored Album:", storedAlbum);
var songcontainer = document.getElementById("songcontainer");
var ol = document.createElement('ol');
ol.setAttribute('id', 'ol');
songcontainer.append(ol);
for (var i = 0; i < storedSongs.length; i++){
    var songname = document.createElement('li');
    songname.textContent = storedSongs[i];
    ol.append(songname);
}
document.getElementById('artist-pic').src = storedAvatar;
document.getElementById('album-img').src = storedAlbum;
}



function removeShows(){
    var ol = document.getElementById("ol");
    ol.remove();
    
}

function removeMusic(){
    var ol = document.getElementById("ol");
    ol.remove();
}

function getShows(){
var storedConcerts = JSON.parse(localStorage.getItem('concerts'));
console.log("storedConcerts:", storedConcerts);

var showscontainer = document.getElementById("songcontainer");

if (storedConcerts.events.length == 0){
    var concertinfo = document.createElement('h1');
    concertinfo.textContent = 'No concerts found.'
    showscontainer.append(concertinfo);
}
else{
    var ol = document.createElement('ol');
    ol.setAttribute('id', 'ol');
    showscontainer.append(ol);
    for (var i = 0; i < storedConcerts.events.length; i++){
        var concertinfo = document.createElement('li');
        concertinfo.textContent = storedConcerts.events[i].title+ " " + storedConcerts.events[i].venue.name + " "+ storedConcerts.events[i].datetime_local;
        ol.append(concertinfo);
    }
}

}

musicbutton.addEventListener("click", function () {
    showsbutton.classList.remove("active");
    musicbutton.classList.add("active");
    removeShows();
    populateSongList();
})

showsbutton.addEventListener("click", function () {
    showsbutton.classList.add("active");
    musicbutton.classList.remove("active");
    removeMusic();
    getShows();

})