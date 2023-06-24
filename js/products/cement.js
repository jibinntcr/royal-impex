let imageAnimCement = document.getElementById("image-animate-cement");

let imageArrayCement = [
    "../../images/products/cement/01.jpg",
    "../../images/products/cement/02.jpg",


];

let imageIndexCement = 0;

const startImageCement = () => {
    imageAnimCement.setAttribute("src", imageArrayCement[imageIndexCement]);
    imageIndexCement++;
    if (imageIndexCement >= imageArrayCement.length) {
        imageIndexCement = 0;
    }
};

setInterval(startImageCement, 2800);



