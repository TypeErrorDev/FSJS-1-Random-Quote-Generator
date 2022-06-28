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

const quotes = [
  {
    quote: `We cannot solve problems with the kind of thinking we employed when we came up with them.`,
    source: `Albert Einstein`,
    citation: `Personal Journal`,
    year: `2021`,
    tag: `Motivational`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty`,
    source: `Winston Churchill`,
    citation: `The Interwebs`,
    year: `1234 A.D.`,
    tag: `Musical`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Either you run the day or the day runs you`,
    source: `Jim Rohn`,
    citation: `Newspaper`,
    year: `1545 A.D.`,
    tag: `Educational`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Look busy, stay busy, and you'll never be busy`,
    source: `Matthew Pantel`,
    citation: `Military`,
    year: `2012`,
    tag: `Deception`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `A man who commited a mistake and doesn't correct it is committing another mistake`,
    source: `Confucius Kongzi`,
    citation: `A&E`,
    year: `2025 A.D.`,
    tag: `Space Travel`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Talent wins games, but teamwork and intelligence win championships`,
    source: `Michael Jordan`,
    citation: `ESPN`,
    year: `1996`,
    tag: `Teamwork`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Be miserable. Or motivate yourself. Whatever has to be done, it's ALWAYS your choice`,
    source: `Wayne Dyer`,
    citation: `Books`,
    year: `2030`,
    tag: `Life`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Pain is just weakness leaving the body`,
    source: `USMC`,
    citation: `History`,
    year: `225 B.C.`,
    tag: `Jurassic Park`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `The standard you walk past, is the standard you accept`,
    source: `David Hurley`,
    citation: `Intranet`,
    year: `1999`,
    tag: `Fun`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `Heads over here...Bodies over there`,
    source: `Venom`,
    citation: `Film`,
    year: `2018`,
    tag: `Movie Quotes`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
  {
    quote: `I dont push, I dont pull, but I go slow`,
    source: `Internet`,
    citation: `The Darkweb`,
    year: `2022`,
    tag: `Life Advice`,
    upvotes: "Total Upvotes - " + Math.floor(Math.random() * 10000),
  },
];

/////////////////////////////////////////////////////////////////
///////////////// POPULATING THE RANDOM QUOTE ///////////////////
/////////////////////////////////////////////////////////////////

function getRandomQuote() {
  let newNumber = Math.floor(Math.random() * quotes.length);
  let newQuote = quotes[newNumber];
  return newQuote;
}

/////////////////////////////////////////////////////////////////
////////////// POPULATING THE HTML WITH THE KVP /////////////////
/////////////////////////////////////////////////////////////////

function printQuote() {
  let populateQuote = getRandomQuote();
  let populateHtml = "";
  let quote = populateQuote;

  populateHtml += `
    <p class='quote'>${quote.quote}</p>
    <p class='source'>${quote.source}</p>
    <span class='citation'>${quote.citation}</span>
    <span class='year'>${quote.year}, ${quote.tag}, ${quote.upvotes}</span>
  `;
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
let newColor = () => (newRandomHex = setInterval(setBg, 5000));
newColor();

/////////////////////////////////////////////////////////////////
///////////// EVENTLISTENER TO POPULATE THE QUOTE ///////////////
/////////////////////////////////////////////////////////////////

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
