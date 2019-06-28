var config = {
    apiKey: "AIzaSyDwMfM1wu0K52V1pSE70i_C75FCHTgOM2Q",
    authDomain: "medicalorganization-7b35a.firebaseapp.com",
    databaseURL: "https://medicalorganization-7b35a.firebaseio.com",
    projectId: "medicalorganization-7b35a",
    storageBucket: "medicalorganization-7b35a.appspot.com",
    messagingSenderId: "144785839916"
  };
  firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL; 

$("#btn-login").click(function(){        
    var email = $("#email").val();
    var password = $("#password").val(); 

    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
    result.catch(function(error){
        var errorCode = error.code; 
        var errorMessage = error.message; 

        console.log(errorCode);
        console.log(errorMessage);
    });
});

$("#btn-logout").click(function(){
  firebase.auth().signOut();
});

function switchView(view){
  $.get({
      url:view,
      cache: false,  
  }).then(function(data){
      $("#container").html(data);
  });
}