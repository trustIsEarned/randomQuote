// // local storage quote list
// (function(){
// 	let siteQuotes = [{quote:"They're not paying for it", author: "Momo", used: false},
// 					{quote:"It would of been nice to get a call", author: "Lex Crow", used: false},
// 					{quote: "I'm smelling it!", author: "Steve Cohagan", used: false},
// 					{quote:"Don't smell my milk!", author: "Matilda Barch", used: false},
// 					{quote: "When I worked on Wonder Boys...", author: "Sean Murray", used: false}];

// 	localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));

// })();




function QuoteHolder(){
	this.quotes = [];

}

QuoteHolder.prototype.Used = function(){
	this.used = true;
}

function Quote(quote, author){
	this.quote = quote;
	this.author = author;
	this.used = false;
}

function addQuote(){
	let addQuote = document.getElementById("quoteAdd");
	let addAuthor = document.getElementById("authorAdd");
	let addBtn = document.getElementById("addButton");

	addButton.addEventListener("click", function(){
		
		let quote = addQuote.value;
		let author = addAuthor.value;
		let fullQuote = new Quote(quote, author);
		let siteQuotes = [];
		if(localStorage.getItem('siteQuotes')==null){
			siteQuotes = [];
			siteQuotes.push(fullQuote);
			localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));
		}else{
			siteQuotes = JSON.parse(localStorage.getItem("siteQuotes"));
			console.log( siteQuotes);

			siteQuotes.push(fullQuote);
			localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));
		}
		
	});

}

addQuote();


