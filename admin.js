
// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "PUT_API_KEY",
  authDomain: "PUT_AUTH_DOMAIN",
  projectId: "PUT_PROJECT_ID",
  storageBucket: "PUT_STORAGE_BUCKET",
  messagingSenderId: "PUT_SENDER_ID",
  appId: "PUT_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===== APPROVE UID =====
function addUID(){

const uid =
document.getElementById("newUID").value.trim();

if(uid === ""){
alert("ENTER UID");
return;
}

db.collection("approvedUIDs")
.doc(uid)
.set({
uid:uid,
approved:true,
time:new Date().toLocaleString()
});

document.getElementById("newUID").value = "";

alert("UID APPROVED");

}

// ===== REMOVE UID =====
function removeUID(){

const uid =
document.getElementById("newUID").value.trim();

db.collection("approvedUIDs")
.doc(uid)
.delete();

alert("UID REMOVED");

}

// ===== LOAD UID =====
function loadUIDs(){

db.collection("approvedUIDs")
.onSnapshot((snapshot)=>{

const list =
document.getElementById("uidList");

if(list){
list.innerHTML = "";
}

let total = 0;

snapshot.forEach((doc)=>{

total++;

if(list){
list.innerHTML += `
<li>${doc.data().uid}</li>
`;
}

});

const totalUID =
document.getElementById("totalUID");

if(totalUID){
totalUID.innerHTML = total;
}

});

}

// ===== LOAD ONLINE =====
function loadOnline(){

db.collection("onlineUsers")
.onSnapshot((snapshot)=>{

const online =
document.getElementById("onlineUsers");

if(online){
online.innerHTML = snapshot.size;
}

});

}

window.onload = ()=>{
loadUIDs();
loadOnline();
};
