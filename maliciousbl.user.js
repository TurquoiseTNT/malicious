// ==UserScript==
// @name MaliciousBlaclistSafeWeb
// @updateURL https://raw.githubusercontent.com/TurquoiseTNT/malicious/main/maliciouslb.user.js
// @downloadURL https://raw.githubusercontent.com/TurquoiseTNT/malicious/main/maliciouslb.user.js
// @website https://tnt.is-a.dev/malicious/
// @version 2023.06.12
// @include *

script.name = "MaliciousBlacklistSafeWeb";
script.shortname = "Malicious";
script.website = "https://tnt.is-a.dev/malicious/";

function replace_subd(str) {
  if(str.includes(".").includes(".")){
    return str.includes(".")[-1];
  }
}
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://raw.githubusercontent.com/TurquoiseTNT/malicious/main/blacklist.json");
xmlHttp.send( null );
console.log(xmlHttp.responseText);
console.log(JSON.parse(xmlHttp.responseText));
JSON.parse(xmlHttp.responseText);
bl = JSON.parse(xmlHttp.responseText);
if(bl.hasOwnProperty(replace_subd(location.hostname))){
  hostname.
}
