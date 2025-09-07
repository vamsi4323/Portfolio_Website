// Typing Effect for Name
const text = "Sanaka Vamsi Krishna";
let index = 0;
function typing() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 150);
  }
}
typing();

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
