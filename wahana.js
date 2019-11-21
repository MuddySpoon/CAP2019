var database = firebase.database();

var currUsername = localStorage.getItem("Username");

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
        window.location.assign("https://cap2019.herokuapp.com/MainGame.html");

        
    }else{
        alert("Mohon pilih salah satu jawaban");
    }

}