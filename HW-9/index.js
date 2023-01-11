let squares = document.querySelector(".square");
const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const newSquare = document.createElement("div");
    newSquare.className = "blocks";
    const randColor1 = Math.floor(Math.random() * 256);
    const randColor2 = Math.floor(Math.random() * 256);
    const randColor3 = Math.floor(Math.random() * 256);
    newSquare.style.width = "50px";
    newSquare.style.height = "50px";
    newSquare.style.background = `rgb(${randColor1},${randColor2},${randColor3})`;
    squares.append(newSquare);
  }
};

const removeBlocks = () => {
  const allBlocks = document.querySelectorAll(".blocks");
  allBlocks.forEach((block) => {
    block.remove();
  });
};

const generateBlocksInterval = () => {
  generateBlocks();
  const interval = setInterval(() => {
    removeBlocks();
    generateBlocks();
  }, 1000);
  return interval;
};

generateBlocksInterval();
