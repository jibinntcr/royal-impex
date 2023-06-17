let imageAnimCoconut = document.getElementById("image-animate-coconut");

let imageArrayCoconut = [
    "../../images/products/coconut/01.jpeg",
    "../../images/products/coconut/02.jpeg",

];

let imageIndexCoconut = 0;

const startImageCoconut = () => {
    imageAnimCoconut.setAttribute("src", imageArrayCoconut[imageIndexCoconut]);
    imageIndexCoconut++;
    if (imageIndexCoconut >= imageArrayCoconut.length) {
        imageIndexCoconut = 0;
    }
};

setInterval(startImageCoconut, 2800);



