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
        window.location.assign("/MainGame.html");

        // function writeUserData(username, date){
        
        //     firebase.database().ref('users/' + username).set({
        //         UserID: username,
        //         UserTime: date
        //     });
        //     localStorage.setItem("Username", username);
        // }
    }else{
        alert("Mohon pilih salah satu jawaban");
    }

}