var valUsername;
var database = firebase.database();

function writeUserData(userID){
    firebase.database().ref('users/' + userID).set({
        UserID: userID
    });
}

function submitClick(){
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
        
    }
    valUsername = document.getElementById("Username").value;
    writeUserData(valUsername);
    return false;
}

document.getElementById("getUsername").innerHTML = "Halo, " +valUsername;
// function submitClick(){
//     var valUsername = document.getElementById("Username").value;
//     var valGroupnumber = document.getElementById("NomorKelompok").value;
    
//         if(valUsername == ""){
//             alert("Username harus diisi!");
//             return false;
//         }
    
// }

// document.getElementById("getUsername").textContent = valUsername;



 

