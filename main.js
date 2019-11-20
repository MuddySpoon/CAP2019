var valUsername;
var valDate;
var database = firebase.database();
var Username;
var upperUsername;

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function submitClick(){

    Username = document.getElementById("Username").value;
    upperUsername = Username.toUpperCase();

    if(Username == ""){
        alert("Username harus diisi!");
        return false;
    }
    else{
        valUsername = upperUsername;

        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        valDate = h + ":" + m + ":" + s;
        console.log(valUsername);
        writeUserData(valUsername,valDate);
    }


}

function writeUserData(username, date){
    firebase.database().ref('users/' + username).set({
        UserID: username
        // ,
        // UserTime: date
    });
    localStorage.setItem("Username", username);
}


 

