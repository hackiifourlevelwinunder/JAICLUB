
function getUIDs(){
try{
return JSON.parse(localStorage.getItem("approvedUIDs")) || [];
}catch(e){
return [];
}
}

function saveUIDs(data){
localStorage.setItem("approvedUIDs", JSON.stringify(data));
}

function renderUIDs(){

const list = document.getElementById("uidList");
if(!list) return;

list.innerHTML = "";

const uids = getUIDs();

uids.forEach((uid)=>{

list.innerHTML += `
<li>${uid}</li>
`;

});

const total = document.getElementById("totalUID");
if(total){
total.innerHTML = uids.length;
}

const online = document.getElementById("onlineUsers");
if(online){
online.innerHTML = uids.length;
}

}

function addUID(){

const input = document.getElementById("newUID");

if(!input) return;

const uid = input.value.trim();

if(uid === ""){
alert("ENTER UID");
return;
}

let uids = getUIDs();

if(!uids.includes(uid)){
uids.push(uid);
saveUIDs(uids);
}

input.value = "";

renderUIDs();

alert("UID APPROVED SUCCESSFULLY");

}

function removeUID(){

const input = document.getElementById("newUID");

if(!input) return;

const uid = input.value.trim();

let uids = getUIDs();

uids = uids.filter(item => item !== uid);

saveUIDs(uids);

renderUIDs();

input.value = "";

alert("UID REMOVED");

}

function clearAll(){

localStorage.removeItem("approvedUIDs");

renderUIDs();

alert("ALL UID CLEARED");

}

window.onload = renderUIDs;
