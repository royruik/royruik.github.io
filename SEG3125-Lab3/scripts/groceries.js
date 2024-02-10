	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Potato",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		catagory: ["Vegetable"],
		price: 0.65,
		image: "images/potato.jpg"
	},
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		catagory: ["Vegetable"],
		price: 1.99,
		image: "images/broccoli.jpeg"

	},	
	{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		catagory: ["Vegetable"],
		price: 1.99,
		image: "images/carrot.jpg"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		catagory: ["Bakery"],
		price: 2.35,
		image: "images/bread.png"
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		catagory: ["Beverage", "Diary"],
		price: 2.49,
		image: "images/milk.jpg"
	},	
	{
		name: "Chocolate Muffin",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		catagory: ["Bakery"],
		price: 3.10,
		image: "images/chocolate-muffin.webp"
	},

	{
		name: "Apple",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		catagory: ["Fruit"],
		price: 3.35,
		image: "images/apple.webp"
	},
	{
		name: "Almond Milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		catagory: ["Beverage"],
		price: 3.49,
		image: "images/almond-milk.png"
	},
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		catagory: ["Vegetable"],
		price: 4.00,
		image: "images/corn.png"
	},

	{
		name: "Blueberries",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		catagory: ["Fruit"],
		price: 6.35,
		image: "images/blueberries.png"
	},

	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		catagory: ["Meat", "Fish"],
		price: 13.00,
		image: "images/salmon.png"
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

function selectProductsByCategory(prods, catagory) {
	
	let lists = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((catagory == "Bakery") && (prods[i].catagory.includes("Bakery"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Beverage") && (prods[i].catagory.includes("Beverage"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Fish") && (prods[i].catagory.includes("Fish"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Fruit") && (prods[i].catagory.includes("Fruit"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Vegetable") && (prods[i].catagory.includes("Vegetable"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Meat") && (prods[i].catagory.includes("Meat"))){
			lists.push(prods[i]);
		}
		else if ((catagory == "Diary") && (prods[i].catagory.includes("Diary"))){
			lists.push(prods[i]);
		}
		else if (catagory=="All"){
			return prods;
		}
	}
	return lists;
}

function restrictProductByPrice(prods, min, max){
	
	let lists = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((prods[i].price>=min) && (prods[i].price<=max)){
			lists.push(prods[i]);
		}
	}
	return lists;

}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(cartArray) {
    let totalPrice = 0;
    cartArray.forEach(function(item) {
        totalPrice += getPrice(item); // getPrice should return the price of a single item
    });
    return totalPrice.toFixed(2); // toFixed(2) will format the number to 2 decimal places
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

