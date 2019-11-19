var database = firebase.database;
var getUserID = document.getElementById("getUserID");
console.log(getUserID);
getUserID.innerHTML = getUserID.innerHTML+" "+localStorage.getItem("Username");


// var firebasegetUserID = firebase.database().ref().child("users");

// firebasegetUserID.on('value',  function())


//document.getElementById("getUserID").innerHTML = firebase.database()     ;