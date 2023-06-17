let imageAnimBanana = document.getElementById("image-animate-banana");

let imageArrayBanana = [
    "../../images/products/banana/01.jpeg",
    "../../images/products/banana/02.jpeg",
    "../../images/products/banana/03.jpeg",
    "../../images/products/banana/04.jpeg",
    "../../images/products/banana/05.jpeg",
];

let imageIndexBanana = 0;

const startImageBanana = () => {
    imageAnimBanana.setAttribute("src", imageArrayBanana[imageIndexBanana]);
    imageIndexBanana++;
    if (imageIndexBanana >= imageArrayBanana.length) {
        imageIndexBanana = 0;
    }
};

setInterval(startImageBanana, 2800);



