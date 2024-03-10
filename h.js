// Function to display friendship message
function displayFriendshipMessage() {
    var messages = [
      "Friendship is like a rainbow between two hearts.",
      "A true friend is the greatest of all blessings.",
      "Good friends are like stars. You don't always see them, but you know they're always there.",
      "Friendship is the only cement that will ever hold the world together.",
      "A single rose can be my garden; a single friend, my world."
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex];
    
    // Create a new paragraph element for the message
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add('friendship-message');
    
    // Add the message to the document body
    document.body.appendChild(messageElement);
    
    // Animate the message
    setTimeout(function() {
      messageElement.style.opacity = '0';
      messageElement.style.transform = 'translateY(-100%)';
      setTimeout(function() {
        messageElement.remove();
      }, 1000);
    }, 5000);
  }
  
  // Call the function initially
  displayFriendshipMessage();
  
  // Set interval to display message every 5 seconds
  setInterval(displayFriendshipMessage, 6000);
  
  // Function to impress girlfriend
  function impressGirlfriend() {
    alert("You're the most beautiful person I've ever met.");
  }
  
  // Add event listener to impress girlfriend on click
  document.addEventListener("click", impressGirlfriend);
  