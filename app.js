//let color = document.querySelector(".input").value;
const clickBtn = document.querySelector("button");
const boxColor = document.querySelector(".box");
const headerEl = document.querySelector(".header");


(function (){

clickBtn.addEventListener("click", (e) => {
e.preventDefault();
  let color = document.querySelector(".input").value;

  // Dispatch "ChangeColor" event.
  changeColor(color);
});

function changeColor (c){
  // Create "ChangeColor" event.
  const event = new CustomEvent("colorChanger", { 
    detail: {
      color: c
    }
  });
  
  // Dispatch event to box element and text element.
  boxColor.dispatchEvent(event);
  headerEl.dispatchEvent(event);
}

// Add event listener for box element.
boxColor.addEventListener("colorChanger", (e)=>{
  let color = e.detail.color;
  boxColor.style.backgroundColor = color;
})

// Add event listener for text element.
headerEl.addEventListener("colorChanger", (e)=>{
  let colorText = e.detail.color;
  headerEl.innerText = colorText;
})

})();