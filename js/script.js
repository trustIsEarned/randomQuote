// // local storage quote list
// (function(){
// 	let siteQuotes = [{quote:"They're not paying for it", author: "Momo"},
// 					{quote:"It would of been nice to get a call", author: "Lex Crow"},
// 					{quote: "I'm smelling it!", author: "Steve Cohagan"},
// 					{quote:"Don't smell my milk!", author: "Matilda Barch"},
// 					{quote: "When I worked on Wonder Boys...", author: "Sean Murray"}];

// 	localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));

// })();

function addQuote(){
	let addQuote = document.getElementById("quoteAdd");
	let addAuthor = document.getElementById("authorAdd");
	let addBtn = document.getElementById("addButton");

	addButton.addEventListener("click", function(){
		
		let quote = addQuote.value;
		let author = addAuthor.value;
		let siteQuotes = [];
		if(localStorage.getItem('siteQuotes')==null){
			siteQuotes = [];
			siteQuotes.push({quote: quote, author:author});
			localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));
		}else{
			siteQuotes = JSON.parse(localStorage.getItem("siteQuotes"));
			console.log( siteQuotes);

			siteQuotes.push({quote: quote, author:author});
			localStorage.setItem("siteQuotes", JSON.stringify(siteQuotes));
		}
		
	});

}

addQuote();


