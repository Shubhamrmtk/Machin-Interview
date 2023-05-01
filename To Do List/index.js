let input=document.getElementById('input')
let button=document.getElementById('btn')
let contener=document.getElementById('contener')
button.addEventListener('click',()=>{
const task=input.value
if(!task){
    alert('please add any task')
    return
}
const paragraph=document.createElement('p')
paragraph.innerHTML=task



contener.appendChild(paragraph)
paragraph.addEventListener('dblclick',()=>{
    contener.removeChild(paragraph)
})
paragraph.addEventListener('click',()=>{
    paragraph.style.textDecoration='line-through'
})

})