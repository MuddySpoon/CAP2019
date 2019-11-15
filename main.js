function submitClick(){
    var username = document.getElementById("Username").value;
    document.getElementById("GetUsername").innerHTML=username;
    var groupnumber = document.getElementById("NomorKelompok").value;
    document.getElementById("GetGroupNumber").innerHTML=groupnumber;

    if(username != "" && groupnumber != 0 && groupnumber != ""){
        
    }
    else{
        window.alert("Username dan Nomor Kelompok tidak boleh kosong.")
    }
}



 

