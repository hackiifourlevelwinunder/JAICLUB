function getUIDs(){
return JSON.parse(localStorage.getItem("uids") || "[]");
}

function verifyUID(){

const uid=document.getElementById("uid").value.trim();

const uids=getUIDs();

if(uid===""){
document.getElementById("msg").innerHTML="ENTER UID";
return;
}

if(uids.includes(uid)){

document.getElementById("msg").innerHTML=
"LOGIN SUCCESSFUL";

setTimeout(()=>{
window.location="dashboard.html";
},1000);

}else{

document.getElementById("msg").innerHTML=
"UID NOT VERIFIED";

}

}