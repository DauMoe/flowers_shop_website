var image_src = ['./images/slide/slide1.jpg', './images/slide/slide2.jpg'];
var slide_image = document.getElementById('slide_image');
var burger = document.getElementById('burger');
var extend = document.getElementsByClassName('extends');
var looking = document.getElementsByClassName('looking');
const slide_width = $(window).width();
var count = 0, index = 0;

//Cal slide height
$(slide_image).css({
    height: (9/21) * slide_width + 'px'
});
slide_image.src = image_src[0];

// ======= Mobile navbar =========
burger.addEventListener('click', ()=>{
    if (count == 0){
        count++;
        $(extend[0]).css({
            display: 'block'
        });
    }
    else {
        $(extend[0]).css({
            display: 'none'
        });
        count = 0;
    }
});
for (let i = 0; i < looking.length; i++) {
    looking[i].addEventListener('click', ()=>{
        if (count == 0){
            count++;
            $(extend[1]).css({
                display: 'block'
            });
        }
        else {
            $(extend[1]).css({
                display: 'none'
            });
            count = 0;
        }
    });
}

setInterval(()=>{
    slide_image.src = image_src[index];
    index++;
    if (index == image_src.length) {
        index = 0;
    }
}, 5000);



