let approvedUIDs =
JSON.parse(localStorage.getItem("uids")) || [
"981748",
"hackii"
];

function verifyUID(){

const uid =
document.getElementById("uid").value;

if(approvedUIDs.includes(uid)){

document.getElementById("result").innerHTML =
"LOGIN SUCCESSFUL FULL ACTIVE";

setTimeout(()=>{
window.location = "dashboard.html";
},1500);

}else{

document.getElementById("result").innerHTML =
"UID NOT VERIFIED";

}

}
