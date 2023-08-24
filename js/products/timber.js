let imageAnimTimber = document.getElementById("image-animate-timber");

let imageArrayTimber = [
    "../../images/products/timber/01.jpeg",
    "../../images/products/timber/02.jpeg",
    "../../images/products/timber/03.jpeg",
   
];

let imageIndexTimber = 0;

const startImageTimber = () => {
    imageAnimTimber.setAttribute("src", imageArrayTimber[imageIndexTimber]);
    imageIndexTimber++;
    if (imageIndexTimber >= imageArrayTimber.length) {
        imageIndexTimber = 0;
    }
};

setInterval(startImageTimber, 2800);



