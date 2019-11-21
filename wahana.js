var database = firebase.database();

var currUsername = localStorage.getItem("Username");

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
        alert("Submit jawaban " + checkRadio[i].value + "  sukses");
        window.location.assign("/MainGame.html");
        localStorage.setItem("Jawaban Wahana", checkRadio[i].value);
        
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        var valDate = h + ":" + m + ":" + s;
        var valUserID = localStorage.getItem("Username");
        var valKodeWahana = localStorage.getItem("Kode Wahana");
        var valJawabanWahana = localStorage.getItem("Jawaban Wahana");
        writeResult(valDate, valUserID, valKodeWahana, valJawabanWahana);
        
        function writeResult (username, kodewahana, jawabanwahana, jamsubmit){
            firebase.database().ref('wahana/' + username).set({
                UserID: username,
                UserWahana : kodewahana,
                UserJawaban : jawabanwahana,
                UserTime: jamsubmit,
            });
        }

    }else{
        alert("Mohon pilih salah satu jawaban");
    }

}

