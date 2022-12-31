const quoteContainer = $('.quote-container');
const quoteText = $('#quote');
const authorText = $('#author');
const twitterBtn = $('#twitter');
const newQuoteBtn = $('#new-quote');
// const loader=$('.loader');
let apiQuotes = []; 
// show loading
// function loading(){
//     loader.hidden=false
//     quoteContainer.hidden=true
// }
// function complete(){
//     loader.hidden=true
//     quoteContainer.hidden=false
// }
//Show new Quotes 
function newQuote() {
    // loading();
    // to pick a random quote from api 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author is null or not
    if (!quote.author) {
        authorText.html(quote.author);
    }
    else {
        authorText.html('Unknown');
    }
    if (quoteText > 120) {
        quoteText.addClass('long-quote');
    } else {
        quoteText.remove('long-quote');
    }

    quoteText.html(quote.text)
    // complete();
}
// get quotes from api
async function getQuotes() {
    // loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
    catch (error) {
        //handle error 

    }
}
// twitter pre populate the tweet 
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.html()}-${authorText.html()}`;
    // const tweetUrl = `https://twitter.com/intent/tweet?text=hithere`;
    window.open(tweetUrl,'_blank');
};
// on load 
newQuoteBtn.click(newQuote)
twitterBtn.click(tweetQuote)
getQuotes();    
