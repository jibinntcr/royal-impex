let imageAnimApple = document.getElementById("image-animate-apple");

let imageArrayApple = [
    "../../images/products/apple/01.jpeg",
    "../../images/products/apple/02.jpeg",
    "../../images/products/apple/03.jpeg",
    "../../images/products/apple/04.jpeg",

];

let imageIndexApple = 0;

const startImageApple = () => {
    imageAnimApple.setAttribute("src", imageArrayApple[imageIndexApple]);
    imageIndexApple++;
    if (imageIndexApple >= imageArrayApple.length) {
        imageIndexApple = 0;
    }
};

setInterval(startImageApple, 2800);



