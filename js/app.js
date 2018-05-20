document.addEventListener('DOMContentLoaded', function() {
  var api =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp';
  var twitter = 'https://twitter.com/intent/tweet';

  var sendQuoteRequest = (function() {
    var baseFunctionName = 'getQuoteResponse';
    var requestCounter = 0;
    return function(url, cb) {
      var functionName = baseFunctionName + requestCounter++;
      window[functionName] = function(response) {
        cb({ author: response.quoteAuthor, text: response.quoteText });
      };
      var el = document.createElement('script');
      el.setAttribute('src', url + '&jsonp=' + functionName);
      document.body.appendChild(el);
    };
  })();

  var text = document.querySelector('.text');
  var author = document.querySelector('.author');
  var tweet = document.querySelector('.tweet');
  var next = document.querySelector('.next');

  function createLink(url, quote) {
    return url + '?text=' + quote.text + ' (' + quote.author + ')';
  }

  next.addEventListener('click', function() {
    sendQuoteRequest(api, function(quote) {
      quote.text = quote.text.trim();
      quote.author = quote.author === '' ? 'Unknown' : quote.author.trim();
      text.innerHTML = quote.text;
      author.innerHTML = quote.author;
      var href = createLink(twitter, quote);
      tweet.setAttribute('href', href);
    });
  });
  next.click();
});
