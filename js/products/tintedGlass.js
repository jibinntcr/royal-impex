let imageAnimTintedGlass = document.getElementById("image-animate-tintedGlass");

let imageArrayTintedGlass = [
    "../../images/products/TintedGlass/01.jpeg",
    "../../images/products/TintedGlass/02.jpg",
    "../../images/products/TintedGlass/03.jpeg",
    "../../images/products/TintedGlass/04.jpeg",

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



