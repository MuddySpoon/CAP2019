var valUsername;
var database = firebase.database();

function writeUserData(){
    firebase.database().ref('users/').set({
        UserID: valUsername
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



 

