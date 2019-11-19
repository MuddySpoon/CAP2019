var valUsername;
var database = firebase.database();


function submitClick(){

    var Username = document.getElementById("Username").value;
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        console.log("adadad");
        valUsername = document.getElementById("Username").value;
        writeUserData(valUsername);
        window.location.href = ("MainGame.html")
    }
}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });

}


 

