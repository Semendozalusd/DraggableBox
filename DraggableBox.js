javascript:(function() {
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.zIndex = '9999';
  container.style.border = '1px solid #ccc';
  container.style.background = '#fff';
  container.style.padding = '10px';
  container.style.width = '400px';
  container.style.height = '400px';
  container.style.resize = 'both';
  container.style.overflow = 'auto';
  container.contentEditable = true;

  var isDragging = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  container.addEventListener("mousedown", dragStart);

  function dragStart(e) {
    if (isOnPerimeter(e)) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      isDragging = true;

      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", dragEnd);
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    isDragging = false;

    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", dragEnd);
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, container);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  function isOnPerimeter(e) {
    var rect = container.getBoundingClientRect();
    var borderWidth = 5; // the width of the border in pixels

    return (
      e.clientX >= rect.left + borderWidth &&
      e.clientX <= rect.right - borderWidth &&
      e.clientY >= rect.top + borderWidth &&
      e.clientY <= rect.bottom - borderWidth
    );
  }

  document.body.appendChild(container);
})();
