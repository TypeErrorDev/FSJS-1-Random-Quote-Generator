/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/////////////////////////////////////////////////////////////////
/////////////// DECLARING THE KVP FOR MY QUOTES /////////////////
/////////////////////////////////////////////////////////////////
const totalUpvotes = "Total Upvotes - " + Math.floor(Math.random() * 10000);
const quotes = [
  {
    quote: `We cannot solve problems with the kind of thinking we employed when we came up with them.`,
    source: `Albert Einstein`,
    citation: `Personal Journal`,
    year: `2021`,
    tag: `Motivational`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty`,
    source: `Winston Churchill`,
    citation: `The Interwebs`,
    year: `1234 A.D.`,
    tag: `Musical`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Either you run the day or the day runs you`,
    source: `Jim Rohn`,
    citation: `Newspaper`,
    year: `1545 A.D.`,
    tag: `Educational`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Look busy, stay busy, and you'll never be busy`,
    source: `Matthew Pantel`,
    citation: `Military`,
    year: `2012`,
    tag: `Deception`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `A man who commited a mistake and doesn't correct it is committing another mistake`,
    source: `Confucius Kongzi`,
    citation: `A&E`,
    year: `2025 A.D.`,
    tag: `Space Travel`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Talent wins games, but teamwork and intelligence win championships`,
    source: `Michael Jordan`,
    citation: `ESPN`,
    year: `1996`,
    tag: `Teamwork`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Be miserable. Or motivate yourself. Whatever has to be done, it's ALWAYS your choice`,
    source: `Wayne Dyer`,
    citation: `Books`,
    year: `2030`,
    tag: `Life`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Pain is just weakness leaving the body`,
    source: `USMC`,
    citation: `History`,
    year: `225 B.C.`,
    tag: `Jurassic Park`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `The standard you walk past, is the standard you accept`,
    source: `David Hurley`,
    citation: `Intranet`,
    year: `1999`,
    tag: `Fun`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `Heads over here...Bodies over there`,
    source: `Venom`,
    citation: `Film`,
    year: `2018`,
    tag: `Movie Quotes`,
    upvotes: `${totalUpvotes}`,
  },
  {
    quote: `I dont push, I dont pull, but I go slow`,
    source: `Internet`,
    citation: `The Darkweb`,
    year: `2022`,
    tag: `Life Advice`,
    upvotes: `${totalUpvotes}`,
  },
];

/////////////////////////////////////////////////////////////////
///////////////// POPULATING THE RANDOM QUOTE ///////////////////
/////////////////////////////////////////////////////////////////

function getRandomQuote() {
  let newRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[newRandomQuote];
}

/////////////////////////////////////////////////////////////////
////////////// POPULATING THE HTML WITH THE KVP /////////////////
/////////////////////////////////////////////////////////////////

function printQuote() {
  let quote = getRandomQuote();
  let populateHtml = "";

  populateHtml += `<p class='quote'>${quote.quote}</p>`;
  populateHtml += `<p class='source'>${quote.source}`;
  if (quotes.citation !== undefined) {
    populateHtml = `<span class='citation'>${quote.citation}</span>`;
  }
  if (quote.year != undefined) {
    populateHtml += `<span class='year'>${quote.year}</span>`;
  }
  if (quote.tag !== undefined) {
    populateHtml += `<span class='tag'>, ${quote.tag}</span>`;
  }
  if (quote.upvotes !== undefined) {
    populateHtml += `, ${quote.upvotes}</span>`;
  }
  populateHtml += `</p>`;
  document.getElementById("quote-box").innerHTML = populateHtml;
  setBg();
}

/////////////////////////////////////////////////////////////////
//////////// POPULATING THE RANDOM HEX CODE FOR BG //////////////
/////////////////////////////////////////////////////////////////

const setBg = () => {
  const randomHEX = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomHEX;
};

/////////////////////////////////////////////////////////////////
///////////// MDN - AUTO COLOR REFRESH FUNCTION /////////////////
/////////////////////////////////////////////////////////////////

// combines the two functions that need to be on a timer
function setIntQuoteBG() {
  setBg();
  printQuote();
}

// declares the refresh rate for the bg color and the quotes
let newColorandQuote = () => {
  setInterval(setIntQuoteBG, 8000);
};
newColorandQuote();

/////////////////////////////////////////////////////////////////
///////////// CLEAR AUTO COLOR REFRESH FUNCTION /////////////////
/////////////////////////////////////////////////////////////////
const getQuote = document.getElementById("load-quote");

getQuote.addEventListener("click", (e) => {
  clearInterval(newColorandQuote);
  newColor();
});

/////////////////////////////////////////////////////////////////
///////////// EVENTLISTENER TO POPULATE THE QUOTE ///////////////
/////////////////////////////////////////////////////////////////

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
