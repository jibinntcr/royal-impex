let imageAnim = document.getElementById("image-animate");

let imageArray = [
    "../images/products/banana/01.jpeg",
    "https://cdn.pixabay.com/photo/2022/09/04/20/11/plane-7432680_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/04/13/43/texture-2917553_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/07/20/18/44/reading-7334749_960_720.png"
];

let imageIndex = 0;

const startImage = () => {
    imageAnim.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
};

setInterval(startImage, 5800);



