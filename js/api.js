//If we want any data from server then we use fetch('address'). After that we convert the response to json.Finally the data which we get show them to console .
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
function displayUser(data) {
    // console.log(data);
    const ul = document.getElementById('user-info');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = `Name: ${user.name}`;
        ul.appendChild(li);
    }
}