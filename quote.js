function myFunction() {
		var quotes = [];
		var x = document.getElementsByTagName("p");
		
		document.getElementById("demo").innerHTML = x;  
		
		for(var i = 0; i < x.length; i++)
	{
		quotes.push(x[i].innerHTML);
		//alert(x[i].innerHTML);
		console.log(quotes);
	}
}


