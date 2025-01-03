const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const photographyBtn = document.getElementById('photography');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => 
    {
    container.classList.remove("active");
});

photographyBtn.addEventListener('click', () => {
    container.classList.toggle("photography-active");
});