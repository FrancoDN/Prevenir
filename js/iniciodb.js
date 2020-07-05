var firebaseConfig = {
    apiKey: "AIzaSyCxBaoLoczWuMLOanQSBzyZMrgZ1CyBVaI",
    authDomain: "prevenir-ensenada.firebaseapp.com",
    databaseURL: "https://prevenir-ensenada.firebaseio.com",
    projectId: "prevenir-ensenada",
    storageBucket: "prevenir-ensenada.appspot.com",
    messagingSenderId: "489743770277",
    appId: "1:489743770277:web:2adb3526e749a1f5e0e34c",
    measurementId: "G-DRHFR1WHB1"
};
firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref('Personas');