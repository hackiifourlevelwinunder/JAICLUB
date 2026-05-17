function getUIDs(){
return JSON.parse(localStorage.getItem("uids") || "[]");
}

function saveUIDs(arr){
localStorage.setItem("uids",JSON.stringify(arr));
}

function render(){

const list=document.getElementById("list");

list.innerHTML="";

const uids=getUIDs();

uids.forEach(uid=>{

list.innerHTML += `<li>${uid}</li>`;

});

}

function addUID(){

const uid=document.getElementById("newuid").value.trim();

if(uid===""){
alert("ENTER UID");
return;
}

let uids=getUIDs();

if(!uids.includes(uid)){
uids.push(uid);
saveUIDs(uids);
}

document.getElementById("newuid").value="";

render();

alert("UID APPROVED");

}

function removeUID(){

const uid=document.getElementById("newuid").value.trim();

let uids=getUIDs();

uids=uids.filter(x=>x!==uid);

saveUIDs(uids);

render();

alert("UID REMOVED");

}

render();
