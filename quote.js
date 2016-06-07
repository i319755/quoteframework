/*function myFunction() {
		var quotes = [];
		var x = document.getElementsByTagName("p");
		
		console.log(document.getElementById("quote"));
		console.log(x);
		
		document.getElementById("demo").innerHTML = x;  
		
		for(var i = 0; i < x.length; i++)
	{
		quotes.push(x[i].innerHTML);
		//alert(x[i].innerHTML);
		console.log(quotes);
	}
}




function myFunction() {
		var quotes = [];
		//var x = document.getElementsByTagName("p");
		
		var x = document.getElementById("quote");
		console.log(x);
		console.log(x.getElementsByTagName("p").length);
		
		document.getElementById("demo").innerHTML = x;  
		
		for(var i = 0; i < x.getElementsByTagName("p").length; i++)
	{
		quotes.push(x.getElementsByTagName("p")[i].innerHTML);
		//alert(x[i].innerHTML);
		console.log(quotes);
	}
}

*/

/*

function myFunction() {	

	//get the quote div
	var x = document.getElementById("quote");
	
	//console.log(x);
	//console.log(x.children[1].innerHTML);
	
	//get the quote lines
	old = document.getElementById('quote').innerHTML;
	
	document.getElementById('quote').innerHTML = old + '<p class="singleQuote">' + x.children[1].innerHTML + '</p>' ;
	
	document.getElementById("demo").innerHTML = x;  
	

	function randomQuote(){
		 
		var = totalQuoteLines = x.getElementsByTagName("p").length);
		console.log(totalQuoteLines);
	
	}
	
	randomQuote();
	
}
*/

document.addEventListener("DOMContentLoaded", function(event) {
	
	//get the quote div
	var x = document.getElementById("quote");
	
	//console.log(x);
	//console.log(x.children[1].innerHTML);
	
	//get the quote lines
	old = document.getElementById('quote').innerHTML;
	
	document.getElementById('quote').innerHTML = old + '<p class="singleQuote">' + x.children[1].innerHTML + '</p>' ;
	
	document.getElementById("demo").innerHTML = x;  
	

	function randomQuote(){
		 
		var totalQuoteLines = x.getElementsByTagName("p").length;
		console.log(totalQuoteLines);

		var random = Math.floor((Math.random() * totalQuoteLines));
		document.getElementById("demo").innerHTML = random;
	
	}
	randomQuote();
});



