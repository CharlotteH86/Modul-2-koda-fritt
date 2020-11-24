//let color = document.querySelector(".input").value;
const clickBtn = document.querySelector("button");
const boxColor = document.querySelector(".box");

(function (){
function changeColor(){
    let color = document.querySelector(".input").value;
    boxColor.style.backgroundColor = color;
}


clickBtn.addEventListener("click", (e) => {
    changeColor();
    e.preventDefault();
  });
})();