let imageAnimMazafatiDates = document.getElementById("image-animate-mazafatiDates");

let imageArrayMazafatiDates = [
    "../../images/products/MazafatiDates/01.jpeg",
    "../../images/products/MazafatiDates/011.jpeg",
    "../../images/products/MazafatiDates/02.jpeg",
    "../../images/products/MazafatiDates/03.jpeg",
    "../../images/products/MazafatiDates/04.jpeg",
    "../../images/products/MazafatiDates/05.jpeg",
];

let imageIndexMazafatiDates = 0;

const startImageMazafatiDates = () => {
    imageAnimMazafatiDates.setAttribute("src", imageArrayMazafatiDates[imageIndexMazafatiDates]);
    imageIndexMazafatiDates++;
    if (imageIndexMazafatiDates >= imageArrayMazafatiDates.length) {
        imageIndexMazafatiDates = 0;
    }
};

setInterval(startImageMazafatiDates, 2800);



