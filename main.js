function submitClick(){
    var username = document.getElementById("Username").value;
    document.getElementById("GetUsername").innerHTML=username;
    var groupnumber = document.getElementById("NomorKelompok").value;
    document.getElementById("GetGroupNumber").innerHTML=groupnumber;

    if(username == ""){
        alert("Username harus diisi!");
        return false;
    }
    if(groupnumber == ""){
        alert("Nomor kelompok harus diisi!")
    }
    if(groupnumber == 0){
        alert("Perhatikan nomor kelompok anda!")
    }
    else{
        window.alert("Username serta Nomor Kelompok tidak boleh kosong.")
    }
}



 

