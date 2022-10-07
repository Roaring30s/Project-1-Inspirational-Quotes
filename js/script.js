/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The way of success is the way of continuous pursuit of knowledge.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: "1937"
  },
  {
    quote: "An investment in knowledge pays the best interest.",
    source: "Benjamin Franklin",
    citation: "",
    year: ""
  },
  {
    quote: "Learn as if you will live forever, live like you will die tomorrow.",
    source: "Mahatma Gandhi",
    citation: "",
    year: ""
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "",
    year: ""
  },
  {
    quote: "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
    source: "Calvin Coolidge",
    citation: "The Dallas Morning News",
    year: "1929"
  },
  {
    quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    source: "Steve Jobs",
    citation: "",
    year: ""
  }
];

/**
 * `getRandomQuote`
 * Randomly selects a quote from the quotes object array
 * @returns {array} quote - returns object from quotes variable
 */
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}
/*
Create a function named printQuote.

You will program the printQuote function to perform three tasks: call the getRandomQuote function, 
use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.

In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. 
Use this code snippet as a guide for what the HTML string should look like at this point:


<p class="quote"> A random quote </p>
<p class="source"> quote source
  <span class="citation"> quote citation </span>
  <span class="year"> quote year </span>
</p>
*/

/**
 * `printQuote`
 * Builds HTML string to display random quote on browser
 * @returns {array} quote - returns object from quotes variable
 */

function printQuote() {
  const quoteObj = getRandomQuote();
  let htmlStr = `
    <p class="quote"> ${quoteObj.quote} </p>
    <p class="source"> ${quoteObj.source}
  `;
  if (quoteObj.citation) {//Check if citation exists
    htmlStr += `<span class="citation"> ${quoteObj.citation} </span>`;
  }
  if (quoteObj.year) {//Check if year exists
    htmlStr += `<span class="year"> ${quoteObj.year} </span>`;
  }
  htmlStr += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlStr;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);