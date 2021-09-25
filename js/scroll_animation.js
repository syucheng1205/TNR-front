document.addEventListener("scroll", function(){
    var top = window.scrollY;
    var bot = top + window.innerHeight*3/4;
    var numerical = document.querySelector('.numerical').offsetTop
    console.log(numerical,bot);
    if (numerical < bot) {
        scrollAnimation();
    }
})