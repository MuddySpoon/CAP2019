var valUsername;
var database = firebase.database();


function submitClick(){

    var Username = document.getElementById("Username").value;
    
    if(Username == null){
        alert("Username harus diisi!");
      
    }
    else{
        valUsername = document.getElementById("Username").value;
        writeUserData(valUsername);
        window.location.href = ("https://cappppp.herokuapp.com/MainGame.html")
    }
}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername
    });

}


 

