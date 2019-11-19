function submitClick(){
    var valUsername = document.getElementById("Username").value;
    var valGroupnumber = document.getElementById("NomorKelompok").value;
    
        if(valUsername == ""){
            alert("Username harus diisi!");
            return false;
        }
        if(valGroupnumber == ""){
            alert("Nomor kelompok harus diisi!");
            return false;
        }
        if(valGroupnumber == 0 || valGroupnumber > 20){
            alert("Perhatikan nomor kelompok anda!");
            return false;
        }
    
}

document.getElementById("getUsername").textContent = valUsername;



 

