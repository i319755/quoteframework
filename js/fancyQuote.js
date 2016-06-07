//onload event 
document.addEventListener("DOMContentLoaded", function(event) {
	
	//get the quote div
	var x = document.getElementById("quote");
	//funtion for creation of the random quote based on the total quotes
	function randomQuote(){
		 
		totalQuoteLines = x.getElementsByTagName("p").length;
		random = Math.floor((Math.random() * totalQuoteLines));
		randomQuote = x.children[random].innerHTML;
	}
	randomQuote();
	
	//function for appending the choosen quote to the quote div
	function appendQuote(){	
		document.getElementById("quote").innerHTML = '<p class="singleQuote">' + randomQuote + '</p>';
	}
	appendQuote();	
});

//function for options
var quoteFramework = quoteFramework || (function(){
    var properties = {}; 
 
 //adding the options
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



