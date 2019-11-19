var valUsername;
var database = firebase.database();

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });

}

function submitClick(){
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
        
    }
    else{
        valUsername = document.getElementById("Username").value;
        writeUserData(valUsername);
        window.location.href = ("https://cappppp.herokuapp.com/MainGame.html")
        return false;
    }
}



 

