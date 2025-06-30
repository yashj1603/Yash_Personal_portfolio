const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('navbar');

    menuIcon.onclick = () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // changes icon
    };