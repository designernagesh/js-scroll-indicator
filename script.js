
let scrollFunction = () => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let height = scrollHeight - clientHeight;
    let scrolled = windowScroll / height * 100 + '%';

    let progress_bar = document.querySelector('.progress_bar');

    progress_bar.style.width = scrolled; 

    console.log('Window Scroll: ' + windowScroll);
    console.log('Scroll Height: ', scrollHeight)
    console.log('Client Height: ', clientHeight);
    console.log('Height: ', height)
    console.log('Scrolled: windowScroll / height * 100 + \'%\' ', scrolled)
}
window.onscroll = function(){
    scrollFunction();   
}