var storedArtist = localStorage.getItem('artist');
var storedSongs = JSON.parse(localStorage.getItem('songs'));
var storedAvatar = localStorage.getItem('avatar');
var storedAlbum = localStorage.getItem('album');
console.log("Stored Artist:", storedArtist);
console.log("Stored Songs:", storedSongs);
console.log("Stored Avatar:", storedAvatar);
console.log("Stored Album:", storedAlbum);

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

document.getElementById('artist-pic').src = storedAvatar;
document.getElementById('album-img').src = storedAlbum;