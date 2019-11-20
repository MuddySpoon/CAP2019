var valUsername;
var valDate;
var database = firebase.database();
var Username;
var upperUsername;

function submitClick(){

    Username = document.getElementById("Username").value;
    valDate = date.getTime();
    console.log("valDate");

    upperUsername = Username.toUpperCase();
    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        valUsername = upperUsername;
        writeUserData(valUsername);
    }

}

function writeUserData(){
    firebase.database().ref('users/' + valUsername).set({
        UserID: valUsername,
        UserTime: valDate
    });
    localStorage.setItem("Username", Username);
}


 

