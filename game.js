var getUserID = document.getElementById("getUserID");
var database = firebase.database();

var childData;
var currUsername = localStorage.getItem("Username");
console.log(currUsername);

var wahanaCode = ["022", "101", "303", "440", "500", "123"];

if(localStorage.getItem("Username") = null){
    window.location.assign("https://cap2019.herokuapp.com")
}

function checkWahanaCode(){
    var isAccountExisting = false;
    for (var i = 0; i < wahanaCode.length; i++){
        console.log(wahanaCode[i])

        if(document.getElementById("KodeWahana").value === wahanaCode[i]){
            isAccountExisting = true;
            break
        }
    }

    if(isAccountExisting){
        alert("Kode wahana benar, silahkan tap ok dan tunggu beberapa saat");
    }else{
        alert("Kode Wahana tidak cocok");
    }
    switch(KodeWahana.value){
    case "022":
        window.location.assign("/WaveRacer.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    case "101":
        window.location.assign("/PacificRim.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    case "303":
        window.location.assign("/ScienceCenter.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    case "440":
        window.location.assign("/JurassicIsland.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    case "500":
        window.location.assign("/BatGlider.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    case "123":
        window.location.assign("/TestWahana.html");
        localStorage.setItem("Kode Wahana", KodeWahana.value);
    break;
    }
    
}

