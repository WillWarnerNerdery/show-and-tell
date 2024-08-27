const submit = document.getElementById("submit");
const input = document.getElementById("input");
const postContainer = document.getElementById("post-container");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const postId = input.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((json) => (postContainer.innerHTML = JSON.stringify(json, null, 2)));
});
