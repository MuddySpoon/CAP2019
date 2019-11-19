function submitClick(){
    var username = document.getElementById("Username").value;
    var groupnumber = document.getElementById("NomorKelompok").value;
    
        if(username == ""){
            alert("Username harus diisi!");
            return false;
        }
        if(groupnumber == ""){
            alert("Nomor kelompok harus diisi!");
            return false;
        }
        if(groupnumber == 0 || groupnumber > 20){
            alert("Perhatikan nomor kelompok anda!");
            return false;
        }
    

    document.getElementById("getUsername").textContent = username;

}


 

