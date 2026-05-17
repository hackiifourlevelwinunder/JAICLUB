
const firebaseConfig = {
  apiKey: "AIzaSyDmAmd9yqMYCnlAkgFzzQR9jur6lASytgI",
  authDomain: "hakciii.firebaseapp.com",
  projectId: "hakciii",
  storageBucket: "hakciii.firebasestorage.app",
  messagingSenderId: "363421007677",
  appId: "1:363421007677:web:7f0b76549293bffab98f54",
  measurementId: "G-01B8F2DGZP"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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

function removeUID(){

const uid =
document.getElementById("newUID").value.trim();

db.collection("approvedUIDs")
.doc(uid)
.delete();

alert("UID REMOVED");

}

function loadUIDs(){

db.collection("approvedUIDs")
.onSnapshot((snapshot)=>{

const list =
document.getElementById("uidList");

list.innerHTML = "";

let total = 0;

snapshot.forEach((doc)=>{

total++;

list.innerHTML += `
<li>${doc.data().uid}</li>
`;

});

document.getElementById("totalUID").innerHTML =
total;

});

db.collection("onlineUsers")
.onSnapshot((snapshot)=>{

document.getElementById("onlineUsers").innerHTML =
snapshot.size;

});

}

window.onload = loadUIDs;
