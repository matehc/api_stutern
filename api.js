// let result;

function display(result) {
    document.querySelector('div').innerHTML = JSON.stringify(result);
}

const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(json => display(json));
}

getUsers();

const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(json => display(json));
}

getPosts();

const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then(json => display(json));
}

getComments();

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then(json => display(json));
}

getTodos();

const getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then(json => display(json));
}

getAlbums();

const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then(json => display(json));
}

getPhotos();

