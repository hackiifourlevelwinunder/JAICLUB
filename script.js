
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

function verifyUID(){

const uid =
document.getElementById("uid").value.trim();

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
time:new Date().toLocaleString()
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
