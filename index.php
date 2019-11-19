<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Main Menu</title>
    <link rel="stylesheet" href="Main Menu.css">
    <link rel="stylesheet" href="bootstrap.css">
    
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>
    <script src='https://www.gstatic.com/firebasejs/7.4.0/firebase-database.js'></script>

    <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDg15qeT7tEkX1lJXK7iYlbru7o9WNWY6Y",
        authDomain: "cap-2019-832ba.firebaseapp.com",
        databaseURL: "https://cap-2019-832ba.firebaseio.com",
        projectId: "cap-2019-832ba",
        storageBucket: "cap-2019-832ba.appspot.com",
        messagingSenderId: "77391295035",
        appId: "1:77391295035:web:dab001ddfc1c5e07a2e21e",
        measurementId: "G-C991JYDZYE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    </script>
    
    <script src="main.js"></script>
</head>
    <body>
        <div class="logo w-100 h-25">
            <img class="LogoCAP" src="LogoCAP.png">
        </div>
        <div class="Informasi">
            <p>Silahkan masukkan data sesuai didalam nametag</p>
        </div>
        <form method="post" action="MainGame.html">
            <div class="InputData">
                <div class="InputUsername">
                    <input type="text" id="Username" placeholder="Username" required>
                </div>
            </div>
            <div class="button">
                <input type="Submit" id="btn" class="SignIn" value="Sign In" onClick="submitClick()"></input>
            </div>
        </form>
    </body>
</html>