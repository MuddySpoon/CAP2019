var database = firebase.database;
var getUserID = document.getElementById("getUserID");
var currUsername = localStorage.getItem("Username");
var database = firebase.database();
var childData;
// console.log(getUserID);
// getUserID.innerHTML = localStorage.getItem("Username");


// var firebasegetUserID = firebase.database().ref().child("UserID");
// firebasegetUserID.on('value',  function(datasnapshot){
//     getUserID.innerText = datasnapshot.
// })

window.onload = function getUserID(){
    firebase.database().ref('users/' + currUsername).on('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        childData = childSnapshot.val();
        });
    });
    console.log(childData);
}

//document.getElementById("getUserID").innerHTML = firebase.database()     ;