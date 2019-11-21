var database = firebase.database();

var currUsername = localStorage.getItem("Username");

function submitjawaban(){
    alert("submit sukses");
    window.location.assign("https://cap2019.herokuapp.com/MainGame.html");
}