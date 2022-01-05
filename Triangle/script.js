function drawTriangle(){
  const number = 5;
  let starCount = 1;
  let spaceCount = number - 1;
  let triangle = '';
  
  for(let i = 0; i < number; i++) {
    let row = ' '.repeat(spaceCount) + '*'.repeat(starCount);
    triangle += row + '\n';
    starCount += 2;
    spaceCount--;
  }
  console.log(triangle);
}

drawTriangle();