
document.addEventListener("DOMContentLoaded", function(event) {
	
	//get the quote div
	var x = document.getElementById("quote");
	
	//console.log(x);
	//console.log(x.children[1].innerHTML);
	
	//get the quote lines to add a element
	//old = document.getElementById('quote').innerHTML;
	
	//document.getElementById('quote').innerHTML = old + '<p class="singleQuote">' + x.children[1].innerHTML + '</p>' ;
	
	//document.getElementById("demo").innerHTML = x;  
	
	//funtion for creation of the random quote
	function randomQuote(){
		 
		totalQuoteLines = x.getElementsByTagName("p").length;
		console.log(totalQuoteLines);

		random = Math.floor((Math.random() * totalQuoteLines));
		console.log(random);
		//document.getElementById("demo").innerHTML = random;
		
		randomQuote = x.children[random].innerHTML;
		console.log(randomQuote);
	}
	randomQuote();
	
	//console.log(random);
	//console.log(randomQuote);
	
	//function for appending the code to the quote div
	function appendQuote(){
		
		document.getElementById("quote").innerHTML = '<p class="singleQuote">' + randomQuote + '</p>';
		
		console.log(document.querySelector(".singleQuote"));
	}
	appendQuote();	
});


var quoteFramework = quoteFramework || (function(){
    var properties = {}; 
 
	return {
        options : function(options) {
            properties = options;
       		document.addEventListener("DOMContentLoaded", function(event) {
				document.querySelector(".singleQuote").style.fontSize =  properties[0];
				document.querySelector(".singleQuote").style.color = properties[1];
				document.querySelector(".singleQuote").style.fontFamily = properties[2];
				document.querySelector(".singleQuote").style.textAlign = properties[3];
			
			});
       }
    };
 
}());



