var valUsername;
var database = firebase.database();
var Username;

function submitClick(){

    Username = document.getElementById("Username").value;

    Username.value = string.toUpperCase();
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        valUsername = Username;
        writeUserData(valUsername);

        window.location = ("MainGame.html");
    }

}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });
    localStorage.setItem("Username", Username);
}


 

