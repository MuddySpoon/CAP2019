var database = firebase.database;
var getUserID = document.getElementById("getUserID");
var database = firebase.database();

var childData;
var currUsername = localStorage.getItem("Username");
console.log(currUsername);

var wahanaCode = ["022", "101", "303", "440", "500"];

function checkWahanaCode(){

    if(wahanaCode != "022" || wahanaCode != "101" || wahanaCode != "303" || wahanaCode != "440" || wahanaCode != "500" ){
        alert("Kode Wahana Tidak Cocok");
    }else{
        alert("Kode Wahana cocok");
        window.location.href("MainForm.html")
    }
    // for (var i = 0; i < wahanaCode.length; i++){
    //     console.log(wahanaCode[i])
    //     if(document.getElementById("KodeWahana").value == wahanaCode[i]){
    //         alert("Kode Wahana cocok");
    //         // window.location
    //     }
    // }
}


// function writeKodeWahana(kode){

// }


// document.getElementById("getUserID").innerText = "Hello, "+currUsername;

//window.onload = function getUserID(){
    //     firebase.database().ref('users/' + currUsername).on('value',
    //     function(snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //         childData = childSnapshot.val();
    //         });
    //     });
    //     console.log(childData);
    // }
// var firebasegetUserID = firebase.database().ref('users/' + );
// firebasegetUserID.on('value',  function(datasnapshot){
//     getUserID.innerText = datasnapshot.valUsername();
// })
// console.log(""
// console.log(getUserID);

//document.getElementById("getUserID").innerHTML = firebase.database()     ;