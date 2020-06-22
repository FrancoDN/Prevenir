//Login
const loginFormu = document.querySelector('#loginform');
loginFormu.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginFormu['email'].value;
    const dni = loginFormu['dni'].value;

    firebase.auth().signInWithEmailAndPassword(email, getId('dni')).then(cred => {
        console.log(cred);
    })
})

/*

document.getElementById("loginform").addEventListener("submit", (e) => {
    e.preventDefault();

    email = getId("email");
    dni = getId("dni");

    firebase.auth().signInWithEmailAndPassword(email, dni).catch(e => alert(e.message));

    alert("Logeado papi " + email);

    document.getElementById("loginform").reset();
});
*/

/*
function getId(id) {
    return document.getElementById(id).value;
}
*/