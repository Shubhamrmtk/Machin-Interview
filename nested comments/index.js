let commentContainer=document.getElementById('comment-container')
function createInputbox(){
    const div=document.createElement('div')
    div.setAttribute('class','comment-details')
    div.innerHTML +=`<input type="text" placeholder="add text here" class="input">
    <button class="btn-submit">submit</button>`
    return div
    
    

}
function addreply(text){

    const div=document.createElement('div')
    div.setAttribute('class','all-comments')
    div.innerHTML+=`<div class="card">
    <span class="text">${text}</span>
    <span id="reply" class="reply">Add reply</span>
</div>`
return div
    
                
            

}
commentContainer.addEventListener('click',(e)=>{
    let replyClick=e.target.classList.contains('reply')
    let submitClick=e.target.classList.contains('btn-submit')
    let closestCard=e.target.closest(".all-comments")

    if(replyClick){
        // add input box
        closestCard.appendChild(createInputbox())

    }
    if(submitClick){
        // add reply card
        const commentDetails=e.target.closest('.comment-details')
        if(commentDetails.children[0].value){
            closestCard.appendChild( addreply(commentDetails.children[0].value))
            commentDetails.remove()

        }
        


    }
})