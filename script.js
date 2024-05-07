function changeImage() {
    var image = document.getElementById("image");
    var currentSrc = image.getAttribute("src");
    
    if (currentSrc === "smiley.png") {
        image.src = "sad.png";
        document.body.style.backgroundColor = "lightcoral";
    } else {
        image.src = "smiley.png";
        document.body.style.backgroundColor = "lightblue";
    }
}
