let feet = document.getElementById("feet");
let inches = document.getElementById("inches");

feet.addEventListener("input", function() {
    let f = this.value;
    let i = f * 12;
    inches.value = i;
})

inches.addEventListener("input", function() {
    let i = this.value;
    let f = i / 12;
    feet.value = f;
})