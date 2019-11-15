function submitClick(){
    var username = document.getElementById("Username").value;
    document.getElementById("GetUsername").innerHTML=username;
    var groupnumber = document.getElementById("NomorKelompok").value;
    document.getElementById("GetGroupNumber").innerHTML=groupnumber;

    if(username != "" || groupnumber != 0 || groupnumber != ""){
        window.location.href="Main Game.html"
    }
    else{
        window.alert("Username serta Nomor Kelompok tidak boleh kosong.")
    }
}



 

