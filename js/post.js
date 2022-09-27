function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
getPost();

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const article = document.createElement('div');
        article.classList.add('post');
        article.innerHTML = `
        <h3>${post.title.toUpperCase()}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(article);
    }
}
//GET is used to get the data from server and show it to user
//POST is always for creating a resource ( does not matter if it was duplicated )
//PUT is for checking if resource exists then update, else create new resource
//PATCH is always for updating a resource
//DELETE is used to delete a resource identified by a URI.
//CRUD operations means  Create, read, update and delete

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));