// Create iframe
var iframe = document.createElement("iframe");
iframe.style.position = "fixed";
iframe.style.top = "50%;
iframe.style.left = "50%";
iframe.style.transform = "translate(-50%, -50%)";
iframe.style.backgroundColor = "#ffffff";
iframe.style.padding = "20px";
iframe.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
iframe.setAttribute("sandbox", "allow-scripts");
document.body.appendChild(iframe);

// Wait for iframe to load before accessing its contents
iframe.onload = function() {
  // Create multiplication table
  var table = "<table>";
  for (var i = 1; i <= 12; i++) {
    table += "<tr>";
    for (var j = 1; j <= 12; j++) {
      var cellClass = "";
      if (i === 1) {
        cellClass = "x" + j;
      }
      if (j === 1) {
        cellClass += " y" + i;
      }
      table += "<td class='" + cellClass + "'>" + (i * j) + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  iframe.contentDocument.body.innerHTML = table;

  // Add close button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "5px";
  closeButton.style.right = "5px";
  closeButton.addEventListener("click", function() {
    iframe.remove();
  });
  iframe.contentDocument.body.appendChild(closeButton);

  // Highlight row and column on mouseover
  var cells = iframe.contentDocument.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function() {
      var rowClass = this.classList[0];
      var colClass = this.classList[1];
      var rows = iframe.contentDocument.getElementsByClassName(rowClass);
      var cols = iframe.contentDocument.getElementsByClassName(colClass);
      for (var j = 0; j < rows.length; j++) {
        rows[j].style.backgroundColor = "yellow";
      }
      for (var j = 0; j < cols.length; j++) {
        cols[j].style.backgroundColor = "yellow";
      }
    });
    cells[i].addEventListener("mouseout", function() {
      var rowClass = this.classList[0];
      var colClass = this.classList[1];
      var rows = iframe.contentDocument.getElementsByClassName(rowClass);
      var cols = iframe.contentDocument.getElementsByClassName(colClass);
      for (var j = 0; j < rows.length; j++) {
        rows[j].style.backgroundColor = "";
      }
      for (var j = 0; j < cols.length; j++) {
        cols[j].style.backgroundColor = "";
      }
    });
  }
}
// Set iframe source
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI("<html><head><title>Multiplication Table</title></head><body></body></html>");
