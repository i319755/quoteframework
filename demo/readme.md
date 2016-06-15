## Synopsis

A small library that will create a quote div that you can modify into your website

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
## Properties

The easeist way to change the properties of FancyQuote is using the property script in your HTML file.
You can edit the div from FancyQuote in many ways. Also the fontSize, Color, fontFamily and textAlign can be modified.

Paste this script into your HTML file.
```Javascript
<!--script to run the options of fancyQuote-->
<script type="text/javascript">
   quoteFramework.options([/*fontsize*/"25px", /*Color*/"white",/*fontFamily*/ "Source Sans Pro",/*textAlign*/"center",/*div color*/"#000000",/*padding*/"45px"]);
</script>
```

## Demo

Open the demo files from the download make sure u run them on a localhost.
There is also a example file to check an example where fancyQuote is included into a website.

## Motivation

This library was created as an example on how to create a library.

## Installation

For a installation without styling:
Download the library, and call the js and css files from the demo in the head of your HTML file.
Afterwards paste the HTML code from the demo.html into your own html file, whereever you like to include FancyQuote.
For any tip go to ## Code Example for a description. 


