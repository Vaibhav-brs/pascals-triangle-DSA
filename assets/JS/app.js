function generatePascalsTriangle() {
    const numRows = document.getElementById("rows").valueAsNumber;
  
    const triangle = generateTriangle(numRows);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Pascal's Triangle:</strong><br>" + triangle.map(row => row.join(" ")).join("<br>");
  }
  
  function generateTriangle(numRows) {
    const triangle = [];
  
    for (let i = 0; i < numRows; i++) {
      const row = [];
  
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
  
      triangle.push(row);
    }
  
    return triangle;
  }
  