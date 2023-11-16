// auth.js
const authStatus = document.getElementById('authStatus');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Soumettre le formulaire de connexion
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            authStatus.innerHTML = `Connecté en tant que ${user.email}`;
            
            // Redirection vers la page d'ajout d'informations après la connexion
            window.location.href = "ajouter-informations.html";
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            authStatus.innerHTML = `Erreur de connexion: ${errorMessage}`;
        });
});

// Soumettre le formulaire d'enregistrement
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            authStatus.innerHTML = `Utilisateur enregistré en tant que ${user.email}`;
            
            // Redirection vers la page d'ajout d'informations après l'enregistrement
            window.location.href = "ajouter-informations.html";
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            authStatus.innerHTML = `Erreur d'enregistrement: ${errorMessage}`;
        });
});
