// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
// Global Variables
var cart = [];

function onLoadFunction() {
    openInfo(null, 'Preference'); // Set 'Client' as the default active tab
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

//Price Range
const rangevalue =  document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue =  document.querySelectorAll(".range-input input"); 
  
// Set the price gap 
let priceGap = 1; 
  
// Adding event listners to price input elements 
const priceInputvalue =  
    document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
    priceInputvalue[i].addEventListener("input", e => { 
  
        // Parse min and max values of the range input 
        let minp = parseInt(priceInputvalue[0].value); 
        let maxp = parseInt(priceInputvalue[1].value); 
        let diff = maxp - minp 
  
        if (minp < 0) { 
            alert("minimum price cannot be less than 0"); 
            priceInputvalue[0].value = 0; 
            minp = 0; 
        } 
  
        // Validate the input values 
        if (maxp > 100) { 
            alert("maximum price cannot be greater than 10000"); 
            priceInputvalue[1].value = 100; 
            maxp = 100; 
        } 
  
        if (minp > maxp - priceGap) { 
            priceInputvalue[0].value = maxp - priceGap; 
            minp = maxp - priceGap; 
  
            if (minp < 0) { 
                priceInputvalue[0].value = 0; 
                minp = 0; 
            } 
        } 
  
        // Check if the price gap is met  
        // and max price is within the range 
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
            if (e.target.className === "min-input") { 
                rangeInputvalue[0].value = minp; 
                let value1 = rangeInputvalue[0].max; 
                rangevalue.style.left = `${(minp / value1) * 100}%`; 
            } 
            else { 
                rangeInputvalue[1].value = maxp; 
                let value2 = rangeInputvalue[1].max; 
                rangevalue.style.right =  
                    `${100 - (maxp / value2) * 100}%`; 
            } 
        } 
    }); 
  
    // Add event listeners to range input elements 
    for (let i = 0; i < rangeInputvalue.length; i++) { 
        rangeInputvalue[i].addEventListener("input", e => { 
            let minVal =  
                parseInt(rangeInputvalue[0].value); 
            let maxVal =  
                parseInt(rangeInputvalue[1].value); 
  
            let diff = maxVal - minVal 
              
            // Check if the price gap is exceeded 
            if (diff < priceGap) { 
              
                // Check if the input is the min range input 
                if (e.target.className === "min-range") { 
                    rangeInputvalue[0].value = maxVal - priceGap; 
                } 
                else { 
                    rangeInputvalue[1].value = minVal + priceGap; 
                } 
            } 
            else { 
              
                // Update price inputs and range progress 
                priceInputvalue[0].value = minVal; 
                priceInputvalue[1].value = maxVal; 
                rangevalue.style.left = 
                    `${(minVal / rangeInputvalue[0].max) * 100}%`; 
                rangevalue.style.right = 
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            } 
        }); 
    } 
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, catagory) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	
	// s3 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s2.value);
	optionArray = selectProductsByCategory(optionArray, catagory);

	let minp = parseInt(priceInputvalue[0].value); 
    let maxp = parseInt(priceInputvalue[1].value);
	optionArray = restrictProductByPrice(optionArray, minp, maxp)


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productImageSrc = optionArray[i].image;

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s3.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s3.appendChild(label);

		// space between label and price tag
		s3.appendChild(document.createTextNode("	"));

		// create a price tag for the label, and also add in HTML DOM
		var priceTag = document.createElement('label')
		priceTag.htmlFor = productPrice;
		priceTag.appendChild(document.createTextNode("$"+productPrice));
		s3.appendChild(priceTag);

		var image = document.createElement("img");
		image.src = productImageSrc;
		image.alt = productName;
		image.width = 100; // Set image width
		image.height = 100; // Set image height
		// Append the image to the display
		s3.appendChild(image);

		// create a breakline node and add in HTML DOM
		s3.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
function addToCart() {
    var ele = document.getElementsByName("product");
    
    // Add the selected products to the cart
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            // Add the product to the cart
            cart.push(ele[i].value);
            // Optionally reset the checked status
            ele[i].checked = false;
        }
    }
	checkCart();
}

function viewCart() {
    var displayCart = document.getElementById('displayCart');
    displayCart.innerHTML = ""; // Clear previous contents

    // Check if the cart is empty
    if (cart.length === 0) {
        displayCart.textContent = "Your cart is currently empty. Why not explore and add some items to it?";
    } else {
        // If the cart has items, display them
        var list = document.createElement("ul");
        cart.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item + " - $" + getPrice(item);
            list.appendChild(listItem);
        });
        displayCart.appendChild(list);
		displayCart.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(cart)));
    }
	checkCart();
}
function checkCart() {
	var clearCartButton = document.getElementById('clearCartButton');
  
	if (cart.length === 0) {
	  clearCartButton.style.display = 'none'; // hide the button if cart is empty
	  proceedtoPaymentButton.style.display = 'none';
	} else {
	  clearCartButton.style.display = 'block'; 
	  proceedtoPaymentButton.style.display = 'block';
	}
  }


function clearCart() {
	cart = [];
	displayCart.innerHTML = ""; // Clear previous contents
	checkCart();
	viewCart();

}
// Hamburger menu functionality

const hamburger= document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))