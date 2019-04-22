

// Initialize Firebase
var config = {
    apiKey: "AIzaSyALR22KtCIvx-7QMEkTngjdRNhqYLmhSuw",
    authDomain: "restaurantproject-8af3b.firebaseapp.com",
    databaseURL: "https://restaurantproject-8af3b.firebaseio.com",
    projectId: "restaurantproject-8af3b",
    storageBucket: "restaurantproject-8af3b.appspot.com",
    messagingSenderId: "952312611405"
};


firebase.initializeApp(config);
var messageRef = firebase.database().ref('messages');


document.getElementById('textbox').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get Values
    var insta = getInputVal('instaname');

    console.log(insta);

    saveMessage(insta);

    window.location.reload();

}

//function to get form values
function getInputVal(id){
    
    return document.getElementById(id).value;

}

function saveMessage(insta){

    var newmessageRef = messageRef.push();

    newmessageRef.set({
        insta:insta
    });

}

