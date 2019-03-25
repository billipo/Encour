const thread = document.getElementById('thread');
const messages = document.getElementById('messages');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');

const auth = firebase.auth();

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









