let uidArray =
JSON.parse(localStorage.getItem("uids")) || [];

function saveData(){

localStorage.setItem(
"uids",
JSON.stringify(uidArray)
);

}

function showUIDs(){

const list =
document.getElementById("uidList");

list.innerHTML = "";

uidArray.forEach((uid)=>{

list.innerHTML += `
<li>${uid}</li>
`;

});

document.getElementById("totalUID")
.innerHTML = uidArray.length;

}

function addUID(){

const uid =
document.getElementById("newUID").value;

if(uid.trim() === ""){
alert("ENTER UID");
return;
}

uidArray.push(uid);

saveData();
showUIDs();

document.getElementById("newUID").value = "";

}

function removeUID(){

const uid =
document.getElementById("newUID").value;

uidArray = uidArray.filter(
item => item !== uid
);

saveData();
showUIDs();

}

function clearAll(){

if(confirm("DELETE ALL UID?")){

uidArray = [];

saveData();
showUIDs();

}

}

showUIDs();
