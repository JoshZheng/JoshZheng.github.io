var myHeading = document.querySelector("#myhead");
myHeading.textContent = "Hello world!";

function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}

function pop() {
    changeImage("unko_gorilla");
    setTimeout(changeImage, 200, "gorilla_banana");
}

document.querySelector("body").addEventListener("click", pop);

let count = 0;

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("unko_gorilla");
}
document.body.onmouseup = function () {
    changeImage("gorilla_banana");
}