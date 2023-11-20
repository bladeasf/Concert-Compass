var storedArtist = localStorage.getItem('artist');
var storedSongs = JSON.parse(localStorage.getItem('songs'));
console.log("Stored Artist:", storedArtist);
console.log("Stored Songs:", storedSongs);

populateSongList();


function populateSongList(){
    var songcontainer = document.getElementById("songcontainer");
    var ol = document.createElement('ol');
    songcontainer.append(ol);
    for (var i = 0; i < storedSongs.length; i++){
        var songname = document.createElement('li');
        songname.textContent = storedSongs[i];
        ol.append(songname);
    }
    
}
