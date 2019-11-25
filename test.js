var database = firebase.database();

var currUsername = localStorage.getItem("Username");
var countWahana = localStorage.getItem("Kunjungan Wahana");


function submitjawaban(){
    var checkRadio = document.getElementsByTagName('input');
    var ischeckRadio = false;
    for (var i = 0; i < checkRadio.length; i++){
        if(checkRadio[i].type == 'radio' && checkRadio[i].checked){
            ischeckRadio = true;
            break
        }
    }

    if (ischeckRadio){
        alert("Submit jawaban sukses");
        window.location.assign("/MainGame.html");
    }
    else{
    alert("Mohon pilih salah satu jawaban");
    }   
}