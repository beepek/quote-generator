let apiQuotes = [];
// show new quote
function newQuote() {
    //pick a random quote freom api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
// get quotes from API 
async function getQuotes() {
    const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json(); 
      newQuote();
    } catch (error) {
        //catch error
    }
}


//on load

getQuotes();