const thread = document.getElementById('thread')
const messages = document.getElementById('messages')

thread.addEventListener('click', () => {
   
   messages.style.display = "block";     
   thread.style.display = "none";     
   messages.style.zIndex = 999;
   thread.style.zIndex = 0;
     } 
)
messages.addEventListener('click', () => {
   
   thread.style.display = "block";     
   messages.style.display = "none";     
   thread.style.zIndex = 999;
   messages.style.zIndex = 0;
     } 
)