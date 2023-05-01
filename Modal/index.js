    
let btn=document.getElementById('btn')
let modal=document.getElementById('modal')
let close=document.getElementById('close')
btn.addEventListener('click',()=>{
    modal.style.display='block'
})
close.addEventListener('click',()=>{
    modal.style.display='none'
})