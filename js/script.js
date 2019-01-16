/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Look Alive" , "Sicko Mode" , "Plug Walk" , "Exchange"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var imagesLinks =  ["https://i.ytimg.com/vi/ue1czxmU7_s/maxresdefault.jpg" , "https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg" , "https://img.cache.vevo.com/thumb/cms/01cdcc0cf0013606104655ddc26ee11f201822215334931.jpg" , "https://i.ytimg.com/vi/IhP3J0j9JmY/maxresdefault.jpg"]
var artists = ["BlocBoy JB" , "Travis Scott" , "Rich The Kid" , "Imagine Dragons"]
var songLengths = ["3:14" , "5:14" , "3:23" , "3:22"]
var songLinks = ["https://youtu.be/NV-3s2wwC8c" , "https://youtu.be/d-JBBNg8YKs" , "https://youtu.be/ToY6sjSV8h8" , "https://youtu.be/IhP3J0j9JmY"]
// Make sure they match the same order as your array above


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
