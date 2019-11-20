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
        writeUserData(valUsername);

        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        valDate = h + ":" + m + ":" + s;
        console.log("valDate");
    }


}

function writeUserData(){
    // firebase.database().ref('users/' + valUsername).set({
    //     UserID: valUsername,
    //     UserTime: valDate
    // });
    // localStorage.setItem("Username", Username);
    
}


 

