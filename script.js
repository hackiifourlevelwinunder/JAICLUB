
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

// ===== VERIFY UID =====
function verifyUID(){

const uid = document.getElementById("uid").value.trim();

if(uid === ""){
document.getElementById("result").innerHTML =
"ENTER UID";
return;
}

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
time:new Date().toLocaleString(),
browser:navigator.userAgent
});

setTimeout(()=>{
window.location.href="dashboard.html";
},1000);

}else{

document.getElementById("result").innerHTML =
"UID NOT VERIFIED";

}

});

}
