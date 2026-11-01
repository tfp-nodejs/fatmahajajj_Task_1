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
