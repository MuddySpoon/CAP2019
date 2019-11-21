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
        alert("Submit jawaban sukses");
        window.location.assign("/MainGame.html");
        localStorage.setItem("Jawaban Wahana", checkRadio[i].value);
        
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        var valUserID = localStorage.getItem("Username") + " " + localStorage.getItem("Kode Wahana");
        // var valKodeWahana = localStorage.getItem("Kode Wahana");
        var valJawabanWahana = localStorage.getItem("Jawaban Wahana");
        var valDate = h + ":" + m + ":" + s;
        writeResult(valUserID, valJawabanWahana, valDate);
        
        function writeResult (username, jawabanwahana, jamsubmit){
            firebase.database().ref('jawaban/' + username).set({
                UserID: username,
                UserJawaban : jawabanwahana,
                UserTime: jamsubmit,
            });
        }

    }else{
        alert("Mohon pilih salah satu jawaban");
    }

}

