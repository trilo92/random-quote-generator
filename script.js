const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `—"${quote.author}"`; 
}

newQuoteBtn.addEventListener("click", showRandomQuote);

// Show a quote when the page loads
showRandomQuote();

console.log(newQuoteBtn);


