function imgslider(elem) {
    document.querySelector('.starbucksimg').src = elem;
}

function changeCircleColor(color) {

    var circle = document.querySelector('.circle');
    circle.style.background = color;

    var heading = document.querySelector('.textbox>h2>span');
    heading.style.color = color;


    var buttoncolor = document.querySelector('.textbox a');
    buttoncolor.style.background = color;
}




