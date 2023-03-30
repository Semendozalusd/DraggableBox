javascript:(function(){
  var chartDiv = document.createElement('div');
  chartDiv.style.position = 'fixed';
  chartDiv.style.top = '50px';
  chartDiv.style.left = '50px';
  chartDiv.style.backgroundColor = '#fff';
  chartDiv.style.border = '1px solid #ccc';
  chartDiv.style.padding = '10px';
  chartDiv.style.zIndex = '9999';
  var table = document.createElement('table');
  table.style.width = '100%';
  table.style.tableLayout = 'fixed';
  table.style.borderCollapse = 'collapse';
  for (var i = 1; i <= 12; i++) {
    var row = document.createElement('tr');
    for (var j = 1; j <= 12; j++) {
      var cell = document.createElement('td');
      cell.style.padding = '5px';
      cell.style.border = '1px solid #ccc';
      cell.style.textAlign = 'center';
      if (i === 1 || j === 1) {
        cell.style.backgroundColor = '#eee';
      }
      if (i === 1 && j > 1) {
        cell.innerHTML = j - 1;
      }
      if (j === 1 && i > 1) {
        cell.innerHTML = i - 1;
      }
      if (i > 1 && j > 1) {
        cell.innerHTML = (i - 1) * (j - 1);
      }
      cell.addEventListener('mouseover', function() {
        var rowCells = this.parentNode.childNodes;
        for (var k = 0; k < rowCells.length; k++) {
          rowCells[k].style.backgroundColor = '#f5f5f5';
        }
        var columnCells = table.querySelectorAll('tr td:nth-child(' + (this.cellIndex + 1) + ')');
        for (var l = 0; l < columnCells.length; l++) {
          columnCells[l].style.backgroundColor = '#f5f5f5';
        }
      });
      cell.addEventListener('mouseout', function() {
        var rowCells = this.parentNode.childNodes;
        for (var k = 0; k < rowCells.length; k++) {
          rowCells[k].style.backgroundColor = '';
        }
        var columnCells = table.querySelectorAll('tr td:nth-child(' + (this.cellIndex + 1) + ')');
        for (var l = 0; l < columnCells.length; l++) {
          columnCells[l].style.backgroundColor = '';
        }
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  chartDiv.appendChild(table);
  document.body.appendChild(chartDiv);
})();
