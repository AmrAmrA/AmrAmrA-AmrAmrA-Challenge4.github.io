const trigger = document.querySelector('.contLigne'); 
const mobile_menu = document.querySelector('.mobile_list'); 

trigger.addEventListener('click', function() {
    mobile_menu.classList.toggle('active')
})
