let imageAnimKiwi = document.getElementById("image-animate-kiwi");

let imageArrayKiwi = [

    "../../images/products/kiwi/01.jpeg",
    "../../images/products/kiwi/02.jpeg",

];

let imageIndexKiwi = 0;

const startImageKiwi = () => {
    imageAnimKiwi.setAttribute("src", imageArrayKiwi[imageIndexKiwi]);
    imageIndexKiwi++;
    if (imageIndexKiwi >= imageArrayKiwi.length) {
        imageIndexKiwi = 0;
    }
};

setInterval(startImageKiwi, 2800);



