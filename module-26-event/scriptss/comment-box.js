//step --1 set an event handler rot the button
document.getElementById('btn-click-comment')
.addEventListener('click', function(){
    
//?step-2 : get the text written in the comment text area
    const commentText = document.getElementById('comment-text-area');
     
    const newComment = commentText.value;
    console.log(newComment);

    //? step 3 the parent node where to publish comment 
    const commenContainer = document.getElementById('comment_conntainer');
    console.log(commenContainer);

    //?step 4 create a comment p and set the innerText
    const creatp = document.createElement('p');
    creatp.innerText = newComment;
    creatp.classList.add('comment');

    //? step 5 append the new p tag to the parant node
    commenContainer.appendChild(creatp);

    //?step 6 : clean the text area ;
    commentText.value = '';
})