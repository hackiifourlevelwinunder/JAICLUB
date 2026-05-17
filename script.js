
function getUIDs(){
try{
return JSON.parse(localStorage.getItem("approvedUIDs")) || [];
}catch(e){
return [];
}
}

function verifyUID(){

const uid = document.getElementById("uid").value.trim();

if(uid === ""){
document.getElementById("result").innerHTML =
"ENTER UID";
return;
}

const approvedUIDs = getUIDs();

if(approvedUIDs.includes(uid)){

document.getElementById("result").innerHTML =
"LOGIN SUCCESSFUL FULL ACTIVE";

localStorage.setItem("activeUser", uid);

setTimeout(()=>{
window.location.href = "dashboard.html";
},1200);

}else{

document.getElementById("result").innerHTML =
"UID NOT VERIFIED";

}

}
