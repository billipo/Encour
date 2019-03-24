var users = new Set();
const validation = document.getElementById('validation');
const thread = document.getElementById('thread');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const account;
var db = firebase.firestore();
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

btnLogIn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
    if(users.has(email)){
        validation.style.display = 'none';
        thread.style.display = 'initial';
        account = email;
    }
    else{
        alert('Please Sign Up!')
    }
    
});

btnSignUp.addEventListener('click', () => {
  const email = document.getElementById('email').value;
    if(users.has(email)){
        alert('Oops, Looks Like You Are Already Signed Up, Please Log In');
    }
    else{
        users.add(email);
        validation.style.display = 'none';
        thread.style.display = 'initial';
        account = email;
    }
});

