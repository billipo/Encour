const thread = document.getElementById('thread');
const messages = document.getElementById('messages');
const btnSignUp = document.getElementById('btnSignUp');
const auth = document.getElementById('auth');

window.onload = () => {
  setTimeout(()=> {
    let e = document.querySelector('.splash');
    if (e.classList.contains('splash')) {
      e.classList.remove('splash');
      document.getElementById('usr').style.display = 'block';
    };
  },4000)
};


thread.addEventListener('click', () => {
   
   messages.style.display = "flex";     
   thread.style.display = "none";     
   messages.style.zIndex = 999;
   thread.style.zIndex = 0;
});

messages.addEventListener('click', () => {
   
   thread.style.display = "block";     
   messages.style.display = "none";     
   thread.style.zIndex = 999;
   messages.style.zIndex = 0;
});

var dataBase = firebase.firestore();

auth.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    dataBase.collection('users').doc(email).get()
    .then(function(doc){
      if(doc.exists){
        alert('oops you already have an account!')
      }
      else{
        dataBase.collection('users').doc(email).set({
          id: email
        });
      }
    })
});







