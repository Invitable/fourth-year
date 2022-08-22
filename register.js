const firebaseConfig = {
    apiKey: "AIzaSyACWC9cGugXsrBAUK0QJzxHpuwNqQlyN3I",
    authDomain: "apartment-9902d.firebaseapp.com",
    projectId: "apartment-9902d",
    storageBucket: "apartment-9902d.appspot.com",
    messagingSenderId: "458639648193",
    appId: "1:458639648193:web:6793acefb70ef92790bb40"
};



//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()


const signUpButton = document.getElementById('signUpButton');

signUpButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked")

    const registerEmail = document.getElementById("inputEmailRegister")
    const registerPassword = document.getElementById("inputPasswordRegister")

    auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value)
        .then((userCredential) => {
            window.location = "log-in.html";
            // Signed in
            var user = userCredential.user;
            console.log("user", user);
            user.sendEmailVerification();
            alert("Your registration has been completely! A email verification link has been sent to your email");

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error code", errorCode)
            console.log("error Message", errorMessage);
            alert(errorMessage);
        });
})





//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
    if (user) {

        var email = user.email

        var users = document.getElementById("user")
        var text = document.createTextNode(email);

        users.appendChild(text);

        console.log(users)
        //is signed in
    } else {
        //no user signed in
    }
})