var quoteFramework = function quoteFramework(style){
    
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
	
	//Array default options	
	var properties = {
		fontSize: '25px',
		color: 'white', 
		textAlign: 'left',
		fontFamily: 'Source Sans Pro',
		backgroundColor: 'black',
		padding: '45px'
	}
	
	console.log(style);
	console.log(properties);
	//Merge the default settings with the style from the user 
	function mergeObjects(obj, src) {
		Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
		return obj;
	}
	
	properties = mergeObjects(properties, style);

	//console.log(properties['fontSize']);
	console.log(properties);

	document.addEventListener("DOMContentLoaded", function(event) {
		document.querySelector(".singleQuote").style.fontSize = properties.fontSize;
		document.querySelector(".singleQuote").style.color = properties.color;
		document.querySelector(".singleQuote").style.fontFamily = properties.fontFamily;
		document.querySelector(".singleQuote").style.textAlign = properties.textAlign;
		document.querySelector("#quote").style.backgroundColor = properties.backgroundColor;
		document.querySelector("#quote").style.padding = properties.padding;
			
	});
};
