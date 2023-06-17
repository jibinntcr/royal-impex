let imageAnimPatternGlass = document.getElementById("image-animate-patternGlass");

let imageArrayPatternGlass = [
    "../../images/products/PatternGlass/01.jpeg",
    "../../images/products/PatternGlass/02.jpeg",
    "../../images/products/PatternGlass/03.jpeg",
    "../../images/products/PatternGlass/04.jpeg",
    "../../images/products/PatternGlass/05.jpeg",
    "../../images/products/PatternGlass/06.jpeg",
    "../../images/products/PatternGlass/07.jpeg",
    "../../images/products/PatternGlass/08.jpeg",
];

let imageIndexPatternGlass = 0;

const startImagePatternGlass = () => {
    imageAnimPatternGlass.setAttribute("src", imageArrayPatternGlass[imageIndexPatternGlass]);
    imageIndexPatternGlass++;
    if (imageIndexPatternGlass >= imageArrayPatternGlass.length) {
        imageIndexPatternGlass = 0;
    }
};

setInterval(startImagePatternGlass, 2800);



