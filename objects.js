var playlist={Michael: "man in the mirror "}
function updatePlaylist(obj, artistName, songTitle){
  return obj[artistName]=songTitle
}

function removeFromPlaylist(obj, artistName){
delete obj[artistName]
return obj
}
removeFromPlaylist(playlist, "Michael")
delete playlist.Michael

console.log(playlist)