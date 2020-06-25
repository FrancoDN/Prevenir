var firebaseConfig = {
    apiKey: "AIzaSyDDRyqvjiteCRv9dtsvepBFntWCj2_2u7A",
    authDomain: "coronapp-b1f3c.firebaseapp.com",
    databaseURL: "https://coronapp-b1f3c.firebaseio.com",
    projectId: "coronapp-b1f3c",
    storageBucket: "coronapp-b1f3c.appspot.com",
    messagingSenderId: "971835283337",
    appId: "1:971835283337:web:0637a51c09501d1970b358",
    measurementId: "G-HM80TBP5GQ"
};
firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref('Personas');