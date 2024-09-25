// function to load image using promies
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            reject(new Error("Failed to load image"));
        };
    });
}

// function to display image on the HTML document
function displayImage(image) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; //clear previous content
    imageContainer.appendChild(image)
}

// implementation for loadImage(url) nad displayImage(image)
const imageUrl = "https://unsplash.com/s/photos/fresh-carrot";

loadImage(imageUrl).then((image) => {
    console.log("Image loaded successfully");
    displayImage(image);
})
.catch((error) => {
    console.error("Error loading image: ", error.message);
});