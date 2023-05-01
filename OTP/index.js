const inputs=document.getElementById("inputs")
inputs.addEventListener('input',(e)=>{
    const targe=e.target
    const val=targe.value;
    if (isNaN(val)){
        targe.value='';
        return
    }
    if(val!=''){
        const next=targe.nextElementSibling;
        if(next){
            next.focus();

        }
        

    }
})
inputs.addEventListener('keyup',(e)=>{
    const targe=e.target
    const key=e.key.toLocaleLowerCase()
    if(key=="backspace" || key == "delete"){
        targe.value=''
        const prev=targe.previousElementSibling;
        if (prev){
            prev.focus()
        }
        return
    }
})