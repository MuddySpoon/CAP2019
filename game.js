var database = firebase.database;
var getUserID = document.getElementById("getUserID");
// console.log(getUserID);
// getUserID.innerHTML = localStorage.getItem("Username");


var firebasegetUserID = firebase.database().ref(valUsername);
console.log(firebasegetUserID);
// firebasegetUserID.on('value',  function())

//document.getElementById("getUserID").innerHTML = firebase.database()     ;