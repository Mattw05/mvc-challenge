const newFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector("#commentText").value.trim();
  
    if (description) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(description)

  
      if (response.ok) {
        document.location.replace('');
      } else {
        alert('Failed to create blog');
        console.log(description)
      }
    }
  };

  document
  .querySelector('.new-comment')
  .addEventListener('submit', newFormHandler);