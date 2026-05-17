
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function addUID(){

const uid =
document.getElementById("newUID").value;

if(uid.trim()===""){
return;
}

db.collection("approvedUIDs")
.doc(uid)
.set({
uid:uid,
approved:true,
time:new Date().toLocaleString()
});

document.getElementById("newUID").value="";

}

function removeUID(){

const uid =
document.getElementById("newUID").value;

db.collection("approvedUIDs")
.doc(uid)
.delete();

}

function loadUIDs(){

db.collection("approvedUIDs")
.onSnapshot((snapshot)=>{

const list =
document.getElementById("uidList");

list.innerHTML="";

let count=0;

snapshot.forEach((doc)=>{

count++;

list.innerHTML += `
<li>${doc.data().uid}</li>
`;

});

document.getElementById("totalUID").innerHTML =
count;

});

}

function loadOnlineUsers(){

db.collection("onlineUsers")
.onSnapshot((snapshot)=>{

document.getElementById("onlineUsers")
.innerHTML = snapshot.size;

});

}

loadUIDs();
loadOnlineUsers();
