let userId = 0;

async function userInfo() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userInfo = await response.json();
    document.getElementById("user-info").innerHTML = `<h2>USER INFO</h2>
    <p>Name : ${userInfo.name}</p>
    <p>Email : ${userInfo.email}</p>
    <p>Phone : ${userInfo.phone}</p>`;
  } catch (error) {
    console.error('error fetching data :', error);
  }
}
async function userPost() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const userPost = await response.json();
    document.getElementById("user-posts").innerHTML = `<h2>USER POSTS</h2>
    <ul>${userPost.map((post) => `<li>${post.title}</li>`).join("")}</ul>`;
  } catch (error) {
    console.error('error fetching data :', error);
  }
}

document.getElementById("next").addEventListener("click", () => {
  userId++;
  userInfo();
  userPost();
});
document.getElementById("prev").addEventListener("click", () => {
  if (userId > 1) {
    userId--;
    userInfo();
    userPost();
  }
});
