var playlist={"Michael Jackson": "man in the mirror "}
function updatePlaylist(playlist, artistName, songTitle){
  playlist= Object.assign(playlist, { artistName:songTitle})
  return playlist
}

function removeFromPlaylist(obj, artistName){
delete playlist.artistName
return playlist
}
removeFromPlaylist(playlist, "Michael Jackson")
console.log(playlist)