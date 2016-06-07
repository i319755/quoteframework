
document.addEventListener("DOMContentLoaded", function(event) {
	
	//get the quote div
	var x = document.getElementById("quote");
	
	//funtion for creation of the random quote
	function randomQuote(){
		 
		totalQuoteLines = x.getElementsByTagName("p").length;
		random = Math.floor((Math.random() * totalQuoteLines));
		randomQuote = x.children[random].innerHTML;
	}
	randomQuote();
	
	//function for appending the code to the quote div
	function appendQuote(){	
		document.getElementById("quote").innerHTML = '<p class="singleQuote">' + randomQuote + '</p>';
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



