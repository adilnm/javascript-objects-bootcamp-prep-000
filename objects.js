var playlist={"Michael Jackson": "man in the mirror "}
function updatePlaylist(playlist, artistName, songTitle){
  playlist= Object.assign(playlist, { artistName:songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
delete playlist.artistName
return playlist
}