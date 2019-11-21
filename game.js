var database = firebase.database;
var getUserID = document.getElementById("getUserID");
var database = firebase.database();


var childData;
var currUsername = localStorage.getItem("Username");
window.onload = function getUserID(){
    firebase.database().ref('users/' + currUsername).on('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        childData = childSnapshot.val();
        });
    });
    console.log(childData);
}

console.log(currUsername);
getUserID.innerHTML = currUsername;
console.log(getUserID);


// var firebasegetUserID = firebase.database().ref('users/' + );
// firebasegetUserID.on('value',  function(datasnapshot){
//     getUserID.innerText = datasnapshot.valUsername();
// })
// console.log(""
// console.log(getUserID);

//document.getElementById("getUserID").innerHTML = firebase.database()     ;