
// Firebase SDK REQUIRED
// Replace firebaseConfig with your own Firebase project keys

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

function verifyUID(){

const uid = document.getElementById("uid").value;

db.collection("approvedUIDs")
.doc(uid)
.get()
.then((doc)=>{

if(doc.exists){

document.getElementById("result").innerHTML =
"LOGIN SUCCESSFUL FULL ACTIVE";

db.collection("onlineUsers")
.doc(uid)
.set({
uid:uid,
status:"online",
lastActive:new Date().toLocaleString()
});

setTimeout(()=>{
window.location="dashboard.html";
},1200);

}else{

document.getElementById("result").innerHTML =
"UID NOT VERIFIED";

}

});

}
