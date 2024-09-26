const newFormHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector("#commentText").value.trim();
   const blog_id = event.target.getAttribute("data-post-id")
   console.log(commentText,blog_id)
    if (commentText && blog_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ commentText ,blog_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to create comment');
        console.log(commentText)
      }
    }
  };

  document
  .querySelector('.new-comment')
  .addEventListener('submit', newFormHandler);