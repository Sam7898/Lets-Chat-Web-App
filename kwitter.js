// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2UEoqjMbw5Huyhqx8RDKT01h30rz238c",
    authDomain: "lets-chat-web-app-41f72.firebaseapp.com",
    projectId: "lets-chat-web-app-41f72",
    storageBucket: "lets-chat-web-app-41f72.appspot.com",
    messagingSenderId: "268387694245",
    appId: "1:268387694245:web:7d33181348add7fdb7bf4c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}