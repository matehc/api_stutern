// let result;
let htmlFile = "";
let ud = document.querySelector('.userDetails');



const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(json => {
        htmlFile ="";
        json.forEach(user => {
            htmlFile += `
            <div class="user shadow">
        
            <div class="info">
                <h1 class="info__name">${user.name}</h1>
                <span class="info__username">@${user.username}</span>
                
                <p class="info__email">Email: ${user.email}</p>
                <p class="info__company">Company: ${user.company.name}</p>
                <p class="info__website">Website: ${user.website}</p>
                <p class="info__address">Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>

            </div>
        </div>
            `
        });
        ud.innerHTML = htmlFile;
    });
}

getUsers();


const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
        let jsonString = JSON.stringify(json);
        let photos = JSON.parse(jsonString)
        htmlFile = "";
        for (let i=0; i < 10; i++) {
            htmlFile += `
            <div class="image shadow" >
                <img src="${photos[i].url}" alt="${photos[i].title}"> 
            </div>
            `
            ud.innerHTML = htmlFile;
        }
 
    })
}

getPhotos();

// const getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then(json => display(json));
// }

// getPosts();

// const getComments = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((res) => res.json())
//     .then(json => {

//     });
// }

// getComments();

// const getTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then(json => display(json));
// }

// getTodos();

// const getAlbums = () => {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((res) => res.json())
//     .then(json => display(json));
// }

// getAlbums();

// const getPhotos = () => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((res) => res.json())
//     .then(json => display(json));
// }


