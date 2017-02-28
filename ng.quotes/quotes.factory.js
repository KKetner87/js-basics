angular.module("quoteSite")
  .factory("quoteInfo", quoteCntl)

function quoteCntl() {

  var quoteList = [{
      quote: "Unless you love someone, nothing else makes sense.",
      author: "E.E. Cummings",
      rating: "3",
      delete: false,
    },

    {
      quote: "Do or do not. There is no try.",
      author: "Woodrow Wilson",
      rating: "4",
      delete: false,
    },

    {
      quote: "Surely not EVERYBODY was kungfu fighting.",
      author: "-Unknown",
      rating: "5",
      delete: false,
    },

    {
      quote: "Intelligence plus character; that is the goal of true education.",
      author: "Martin Luther King, Jr.",
      rating: "5",
      delete: false,
    },

    {
      quote: "Trust me...",
      author: "Donald Trump",
      rating: "1",
      delete: false,
    },

    {
      quote: "You never know where to look when eating a banana.",
      author: "-Unknown",
      rating: "4",
      delete: false,
    },

    {
      quote: "Laziness is nothing more than the habit of resting before you get tired.",
      author: "Jules Renard",
      rating: "2",
      delete: false,
    },

    {
      quote: "Are we making soup or trying to sumon a demon?",
      author: "Gordan Ramsey",
      rating: "5",
      delete: false,
    }

  ]

  return {
    quote: quoteList
  }
}