var database = firebase.database();

var currUsername = localStorage.getItem("Username");
var countWahana = localStorage.getItem("Kunjungan Wahana");

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

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

        countWahana += 1;
        
        if(countWahana < 5){
            window.location.assign("/MainGame.html");
        }else{
            window.location.assign("/Congratulation.html");
        }
        
        localStorage.setItem("Jawaban Wahana", checkRadio[i].value);
        
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        var valUserID = localStorage.getItem("Username");
        var valKodeWahana = localStorage.getItem("Kode Wahana");
        var valJawabanWahana = localStorage.getItem("Jawaban Wahana");
        var valDate = h + ":" + m + ":" + s;
        
        
        if(valJawabanWahana == "1"){
            writeResult(valUserID, valKodeWahana, valDate);
            function writeResult (username, kodewahana, jamsubmit){
                firebase.database().ref(kodewahana + '/' + username).set({
                    UserTime: jamsubmit,
                });
            }
        }
        
    }else{
        alert("Mohon pilih salah satu jawaban");
    }

}

