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


let signInButton = document.getElementById('signInButton')
signInButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked")

    const loginEmail = document.getElementById("inputEmailLogin")
    const loginPassword = document.getElementById("inputPasswordLogin")

    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
        .then((userCredential) => {

            var user = userCredential.user;
            console.log("user", user);
            if (user.emailVerified) {
                window.location = "index.html";
                alert("Congratulations. Logged In Successfully");
            }
            else {
                alert("Please verify your email first!");
            }



        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert("error code", errorCode)
            alert(errorMessage)
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

// //Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();



// let signInButton = document.getElementById("signInButton");

// signInButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("clicked");

//     const loginEmail = document.getElementById("inputEmailLogin");
//     const loginPassword = document.getElementById("inputPasswordLogin");

//     auth
//         .signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
//         .then((userCredential) => {
//             var user = userCredential.user;
//             console.log("user", user);
//             if (user.emailVerified) {
//                 window.location = "index.html";
//                 alert("Congratulations. Logged In Successfully");
//             } else {
//                 alert("Please verify your email first!");
//             }
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // alert("error code", errorCode)
//             alert(errorMessage);
//         });
// });



// //Lifecycle hooks
// auth.onAuthStateChanged(function (user) {
//     if (user) {
//         var email = user.email;

//         var users = document.getElementById("user");
//         var text = document.createTextNode(email);

//         users.appendChild(text);

//         console.log(users);
//         //is signed in
//     } else {
//         //no user signed in
//     }
// });
