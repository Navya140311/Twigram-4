var firebaseConfig = {
    apiKey: "AIzaSyB9fU8aGbEF5WIOlkqX9ZwSg_Bq3iffMCA",
    authDomain: "medi-chat-5d984.firebaseapp.com",
    databaseURL: "https://medi-chat-5d984.firebaseio.com",
    projectId: "medi-chat-5d984",
    storageBucket: "medi-chat-5d984.appspot.com",
    messagingSenderId: "666648017063",
    appId: "1:666648017063:web:224210965b917d85f40382",
    measurementId: "G-S98G9YRSZQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}