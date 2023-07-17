let vpixel = document.getElementById("mypixel").value;
document.getElementById("pixel").innerHTML = vpixel + "px";
let color = "black";
let colorset = 0;
let draw = document.querySelector(".board");
let click = "flase";
document.querySelector("body").addEventListener("click", () => {
  click = !click;
  if (click) {
    document.getElementById("letdraw").style.border = "solid blue 5px";
  } else {
    document.getElementById("letdraw").style.border = "solid red 5px";
  }
});

let colortyp = (type) => {
  color = type;
  document.getElementById("colortype").innerHTML = type;
  colorset = 0;
};

let Random = () => {
  color = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
  colorset = 1;
};

let erase = () => {
  color = "white";
};
let Reset = () => {
  let squares = draw.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
};

let pixel = (size) => {
  let squares = draw.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  draw.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
  draw.style.gridTemplateRows = `repeat(${size} ,1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let sq = document.createElement("div");
    sq.addEventListener("mouseover", colorsquer);
    sq.style.backgroundColor = "white";
    draw.insertAdjacentElement("beforeend", sq);
  }
};
pixel(vpixel);
let pix = (size) => {
  vpixel = document.getElementById("mypixel").value;
  document.getElementById("pixel").innerHTML = vpixel + "px";
  pixel(size);
};

function colorsquer() {
  if (click) {
    if (colorset == 0) {
      this.style.backgroundColor = color;
    } else {
      Random();
    }
    this.style.backgroundColor = color;
  }
}

let expot = () => {
  html2canvas(document.querySelector(".board")).then(
    (canvas = () => {
      document.body.appendChild(canvas);
    })
  );
  alert("export");
};
