const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');    
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');
// sidebar element
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const videoList = [video1, video2, video3];


videoList.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
        hoverSign.classList.add('active');
    })
    video.addEventListener('mouseout', () => {
        video.pause();
        hoverSign.classList.remove('active');
    })
})

// sidebar element

menu.addEventListener('click', function() { 
    sideBar.classList.add("open-sidebar");
    sideBar.classList.remove("close-sidebar");
    console.log('sidebar opened');
})

close.addEventListener('click', function() {
    sideBar.classList.add("close-sidebar");
    sideBar.classList.remove("open-sidebar");
    console.log('sidebar closed');
})