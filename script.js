// Array of personalized quotes
const personalizedQuotes = [
    "Have a nice day, <username>.",
    "Work hard, <username>.",
    "Believe in yourself, <username>.",
    "<username>, your journey is unique and beautiful.",
    "Stay positive, <username>!",
    "Success is within reach, <username>.",
    "You're capable of amazing things, <username>.",
   
  ];
  
  // Function to generate a random quote with predefined username
  function generateQuote() {
    const username = document.getElementById("username").value;
    const randomIndex = Math.floor(Math.random() * personalizedQuotes.length);
    const quote = personalizedQuotes[randomIndex].replace("<username>", username);
    return quote;
  }
  
  // Function to display personalized quote
  function displayQuote() {
    const quoteElement = document.getElementById("quote");
    const quote = generateQuote();
    quoteElement.textContent = quote;
  }
  
  // Display personalized quote when the page is loaded
  window.onload = displayQuote;
  