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

// TASK 2 -  filter
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const filteredPosts = posts.filter((post) => post.title.length < 25);

    console.log("Filtered Posts:", filteredPosts);
  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPost();

// 1. CustomFilter
function CustomFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 2. CustomMap
function CustomMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// 3. CustomReduce
function CustomReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const filteredPosts = CustomFilter(posts, (post) => post.title.length < 25);
    const postTitles = CustomMap(filteredPosts, (post) => post.title);
    const totalTitleLength = CustomReduce(
      postTitles,
      (acc, title) => acc + title.length,
      0,
    );

    console.log("Filtered Posts:", filteredPosts);
    console.log("Mapped Titles:", postTitles);
    console.log("Total Title Length:", totalTitleLength);
  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPosts();
