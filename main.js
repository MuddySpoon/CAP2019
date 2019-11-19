var valUsername;
var database = firebase.database();


function submitClick(){

    var Username = document.getElementById("Username").value;
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        valUsername = Username;
        writeUserData(valUsername);
    }

    location.replace = ("https://cappppp.herokuapp.com/MainGame.html");
}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });

}


 

