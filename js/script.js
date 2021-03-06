/* global $ */
var songs = ["Look Alive", "Sicko Mode", "Plug Walk", "Exchange"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var imagesLinks = ["https://i.ytimg.com/vi/ue1czxmU7_s/maxresdefault.jpg", "https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg", "https://img.cache.vevo.com/thumb/cms/01cdcc0cf0013606104655ddc26ee11f201822215334931.jpg", "https://i.ytimg.com/vi/IhP3J0j9JmY/maxresdefault.jpg"]
var artists = ["BlocBoy JB", "Travis Scott", "Rich The Kid", "Imagine Dragons"]
var songLengths = ["3:14", "5:14", "3:23", "3:22"]
// BELOW Update the songs array with four of your favorites songs.
var songLinks = ["https://youtu.be/NV-3s2wwC8c", "https://youtu.be/d-JBBNg8YKs", "https://youtu.be/ToY6sjSV8h8", "https://youtu.be/IhP3J0j9JmY"]
// Make sure they match the same order as your array above
var song = [{
title: "Look Alive",
artist: "BlocBoy JB",
runtime: 188400,
image: "https://i.ytimg.com/vi/ue1czxmU7_s/maxresdefault.jpg",


title: "Sicko Mode",
artist: "Travis Scott",
runtime: 308400,
image: "https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg",


title: "Plug Walk",
artist: "Rich The Kid",
runtime: 193800,
image: "https://img.cache.vevo.com/thumb/cms/01cdcc0cf0013606104655ddc26ee11f201822215334931.jpg",


title: "Exchange",
artist: "Imagine Dragons",
runtime: 193200,
image: "https://i.ytimg.com/vi/IhP3J0j9JmY/maxresdefault.jpg",
}];

function displaySongInfo() {
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
        songs.forEach(function(song) {
            $("#songs").append("<p>" + song + "</p>");
        });
        imagesLinks.forEach(function(image) {
            $("#images").append("<img src=" + image + ">");
        });
        artists.forEach(function(artist) {
            $("#artists").append("<p>" + artist + "</p>");
        });
        songLengths.forEach(function(length) {
            $("#lengths").append("<p>" + length + "</p>");
        });
        songLinks.forEach(function(link) {
            $("#links").append("<a" + link + ">");
        });
}

function emptySongInfo() {
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

function addSongInfo() {

    // BELOW write the code to add new items to each of the arrays.
    var addSong = [];
    songs.push(addSong);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

$("#delete").click(function() {
    emptySongInfo();
});  