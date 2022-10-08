/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `lastIndex`
 * Tracker assuring the same quote is not repeated continuously
***/
let lastIndex = 0;

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The way of success is the way of continuous pursuit of knowledge.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: "1937",
    tags: "Educational",
    colorScheme: ["#7bf240", "#2cd9bc"]
  },
  {
    quote: "An investment in knowledge pays the best interest.",
    source: "Benjamin Franklin",
    citation: "",
    year: "",
    tags: "Business",
    colorScheme: ["#F8B195", "#F67280"]
  },
  {
    quote: "Learn as if you will live forever, live like you will die tomorrow.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    colorScheme: ["#EC2049", "#F26B38"]
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "",
    year: "",
    colorScheme: ["#F9CDAD", "#C8C8A9"]
  },
  {
    quote: "Nothing in the world can take the place of Persistence.",
    source: "Calvin Coolidge",
    citation: "The Dallas Morning News",
    year: "1929",
    colorScheme: ["#45ADA8", "#547980"]
  },
  {
    quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    source: "Steve Jobs",
    citation: "",
    year: "",
    colorScheme: ["#A7226E", "#F7DB4F"]
  }
];

/**
 * `getRandomQuote`
 * Randomly selects a quote from the quotes object array
 * @returns {array} quote - returns object from quotes variable
 */
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  while (lastIndex === randomNum) { //Prevent randomNum and lastIndex matching
    randomNum = Math.floor(Math.random() * quotes.length);
  }
  lastIndex = randomNum;
  return quotes[randomNum];
}

/**
 * `printQuote`
 * Builds HTML string to display random quote on browser
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
  const color = quoteObj.colorScheme;
  document.body.style.backgroundImage = `linear-gradient(100deg,${color[0]},${color[1]},${color[0]},${color[1]})`;
  fadeIn(document.getElementById('quote-box'), 2000);
}

/**
 * `fadeIn`
 * Enables a fade-in effect for html element
 * @source https://codepen.io/jorgemaiden/pen/xoRKWN
 */
function fadeIn(element, duration = 600) {
  element.style.display = '';
  element.style.opacity = 0;
  var last = +new Date();
  var tick = function () {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

/*** 
 * EVENT LISTENERS
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 *  SET INTERVAL
***/
setInterval(printQuote, 5000);



