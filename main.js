var valUsername;
var database = firebase.database();
var Username;

function submitClick(){

    Username = document.getElementById("Username").value;
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        valUsername = Username;
        writeUserData(valUsername);
    }

    // location.replace = ("MainGame.html");
}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });
    localStorage.setItem("Username", Username);
}


 

