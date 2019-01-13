var playlist={"Michael Jackson": "man in the mirror "}
function updatePlaylist(obj,key,value){
  Object.assign(obj, obj, { key:value})
}