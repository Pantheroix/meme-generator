const btn1=document.getElementById("btn1");

const URL= 'https://meme-api.com/gimme';

async function fetchdata() {
  try {
      const response = await fetch(URL);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      const myobj={data}

      // Create an image element
      const img=document.querySelector('.img');
      const author=document.getElementById('author')
      const sub=document.getElementById('sub')
      author.innerText="Author:\u00A0"+ myobj.data.author;
      sub.innerText="Subreddit:\u00A0"+ myobj.data.subreddit;
      img.src = myobj.data.url; // Set the image URL
      img.alt = 'Description of the image'; // Set an alt attribute


      // Optionally, you can set other attributes (e.g., width, height) for the image
  } catch (error) {
      console.error(error.message);
  }
}

