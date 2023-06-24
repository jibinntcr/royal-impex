let imageAnimGypsum = document.getElementById("image-animate-gypsum");

let imageArrayGypsum = [
    "../../images/products/Gypsum-1/01.jpeg",
    "../../images/products/Gypsum-1/02.jpeg",
    "../../images/products/Gypsum-1/03.jpeg",

];

let imageIndexGypsum = 0;

const startImageGypsum = () => {
    imageAnimGypsum.setAttribute("src", imageArrayGypsum[imageIndexGypsum]);
    imageIndexGypsum++;
    if (imageIndexGypsum >= imageArrayGypsum.length) {
        imageIndexGypsum = 0;
    }
};

setInterval(startImageGypsum, 2800);



