var playlist={"Michael": "man in the mirror "}
function updatePlaylist(playlist, artistName, songTitle){
  playlist= Object.assign(playlist, { artistName:songTitle})
  return playlist
}

function removeFromPlaylist(obj, artistName){
delete obj.artistName
return obj
}
delete playlist.Michael
console.log(playlist)