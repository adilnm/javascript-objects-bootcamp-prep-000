var playlist={"Michael Jackson": "man in the mirror "}
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, { artistName:songTitle})
}