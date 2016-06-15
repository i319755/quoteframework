## Synopsis

A small library that will create a random quote chosen from all the quotes you like. The quote div can be modified by your custom needs by properties.

## Demo

For a demo click here 

 [FancyQuote Demo](http://i319755.iris.fhict.nl/fancyquote/demo/demo.html)
 
## Code Example

To include fancyQuote into your HMTL file paste this code anywhere you would like the quote on your website.

```HTML
<!-- make fancyQyote div, this is where fancyQuote will appear on your website -->
<div id="quote">
	<p id="quote-lines">"Stay motivated!" - Dylan Peters</p>
	<p id="quote-lines">"Javascript coding is cool!" - Dylan Peters</p>
	<p id="quote-lines">"Framework for random quotes" - Dylan Peters</p>
	<p id="quote-lines">"Add as much quotes as you like" - Dylan Peters</p>	
</div>
```

after you pasted the HTML use this little script to run the library
```Javascript
<!--script to run fancyQuote library-->
<script type="text/javascript">
    quoteFramework();
</script>
```

## Properties
If you feel like changing the looks of FancyQuote, than the easeist way to change the style of FancyQuote is using the parameter style in your HTML file. Also make a var style wich can contain alot of options.

Paste this script into your HTML file.
```Javascript
<!--script to run the style and the fancyQuote library-->
<script type="text/javascript">
     var style = {
		textAlign: 'left',
		color: 'red',
	}
   quoteFramework(style);
</script>
```
You can edit FancyQuote in many ways check this table

| Options        | Type        | Optional   | Description                                                |
|:--------------:|:-------------:|:--------:| ---------------------------------------------------------- |
| textAlign      | string        | true     | aligns the quote inside the div use for example `left`, `right`,`center`    |
| color          | string        | true     | changes the color from the quote you can use colorcodes |
| fontSize       | string        | true     | changes the size of the quote |
| fontFamily     | string        | true     | changes the font family  from the quote  |
| backgroundColor| string        | true     | changes the background color of the quote div you can use colorcodes  |
| padding        | string        | true     | changes size of the quote div |


## Installation

For a installation without styling:
Download the library (zip), and call the js and css files in the head of your HTML file.
Afterwards paste the HTML code from the demo.html into your own html file, whereever you like to include FancyQuote.
For any advice go to ## Code Example for a description. 


