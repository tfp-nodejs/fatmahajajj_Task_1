// TASK 1
async function getposts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log("Response Data:", data);
  } catch (error) {
    console.error("Request Failed:", error);
  }
}
getposts();

// TASK 2

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const filteredPosts = posts.filter((post) => post.title.length < 25);

    console.log("Filtered Posts:", filteredPosts);
  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPosts();


