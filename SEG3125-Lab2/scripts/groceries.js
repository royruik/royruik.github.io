	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Potato",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 0.65
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},	
	{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 2.49
	},	
	{
		name: "Chocolate Muffin",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.10
	},

	{
		name: "Apple",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.35
	},
	{
		name: "Almond Milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.49
	},
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	},

	{
		name: "Blueberries",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 6.35
	},

	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, preference) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			if ((preference == "Organic") && (prods[i].organic == true)){
				products.push(prods[i]);
			}
			else if ((preference == "Inorganic") && (prods[i].organic == false)){
				products.push(prods[i]);
			}
			else if ((preference == "None")){
				products.push(prods[i]);
			}
		}
		
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			if ((preference == "Organic") && (prods[i].organic == true)){
				products.push(prods[i]);
			}
			else if ((preference == "Inorganic") && (prods[i].organic == false)){
				products.push(prods[i]);
			}
			else if ((preference == "None")){
				products.push(prods[i]);
			}
		}

		else if (restriction == "None"){
			if ((preference == "Organic") && (prods[i].organic == true)){
				products.push(prods[i]);
			}
			else if ((preference == "Inorganic") && (prods[i].organic == false)){
				products.push(prods[i]);
			}
			else if ((preference == "None")){
				products.push(prods[i]);
			}
		}
	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

// Return the price of a product with its name
function getPrice(product){
	price = 0;
	for (let i=0; i<products.length; i+=1) {
		if (product.indexOf(products[i].name) > -1){
			price = products[i].price;
		}
	}
	return price;
}

