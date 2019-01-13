var playlist={Michael: "man in the mirror "}
function updatePlaylist(obj, artistName, songTitle){
  return obj[artistName]=songTitle
}

function removeFromPlaylist(obj, artistName){
delete obj.artistName
return obj
}
updatePlaylist(playlist, "Adil", "love")
console.log(playlist)