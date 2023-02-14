// Get a reference to the button and its container
var button = document.getElementById('escape-button');
var container = document.getElementById('button-container');


// Add an event listener to the container to track mouse movements
container.addEventListener('mousemove', function(event) {
    // Get the position of the mouse cursor relative to the container
    var x = event.clientX - container.offsetLeft;
    var y = event.clientY - container.offsetTop;
    
    // Get the width and height of the container and the button
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    // Calculate the maximum distance the button should move from the mouse cursor
    var maxX = containerWidth - buttonWidth;
    var maxY = containerHeight - buttonHeight;
    
    // Calculate the new position of the button based on the mouse cursor position
    var newX = (x / containerWidth) * maxX;
    var newY = (y / containerHeight) * maxY;
    
    // Set the new position of the button
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  });