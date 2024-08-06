const read = document.querySelector('.Unread')
const msgs = document.querySelectorAll('.read')
const count = document.querySelector('.msg_count')

read.addEventListener('click', ()=> {
   msgs.forEach(msg => {
        msg.classList.toggle("marked")   
        msg.querySelector('.msg_icon').classList.toggle("hidden") 
   });
   count.textContent = "0"
})