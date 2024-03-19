let tileSize = 20;
let rows, cols;
let offset = 0;

function setup() {
  createCanvas(600, 600);
  rows = height / tileSize;
  cols = width / tileSize;
  noFill();
}

function draw() {
  background('lightyellow');
  offset += 0.01;//movement offset animation

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let angle = atan2(mouseY - y * tileSize, mouseX - x * tileSize);
      let distortion = sin(offset + angle) * 10;
      let distortionX = cos(angle) * distortion;
      let distortionY = sin(angle) * distortion;

      push();
      translate(x * tileSize + distortionX, y * tileSize + distortionY);
      rotate(angle);

      if ((x + y) % 2 === 0) {
        stroke(255, 0, 0, 55); // Red color w/ opacity
      } else {
        stroke(180, 90); // Grey color w/ opacity
      }
      strokeWeight(0.5); // stoke
      rect(0, 0, tileSize, tileSize);
      pop();
    }
  }
}