function cerrarsesion() {
    firebase.auth().signOut();
}