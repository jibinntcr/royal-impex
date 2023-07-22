let imageAnimTintedGlass = document.getElementById("image-animate-tintedGlass");

let imageArrayTintedGlass = [
    "../../images/products/tintedGlass/01.jpeg",
    "../../images/products/tintedGlass/02.jpg",
    "../../images/products/tintedGlass/03.jpeg",
    "../../images/products/tintedGlass/04.jpeg",

];

let imageIndexTintedGlass = 0;

const startImageTintedGlass = () => {
    imageAnimTintedGlass.setAttribute("src", imageArrayTintedGlass[imageIndexTintedGlass]);
    imageIndexTintedGlass++;
    if (imageIndexTintedGlass >= imageArrayTintedGlass.length) {
        imageIndexTintedGlass = 0;
    }
};

setInterval(startImageTintedGlass, 2800);



