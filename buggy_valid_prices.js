// kamu diminta untuk "fixing bugs" dari code dibawah ini
// sehingga function ini bisa mereturn boolean jika "price-nya" valid.

function hasValidPrice(product){
	if (product == null){ //cara 2: (!product)
		return false;
	} else if (product.price >= 0 && typeof product.price === 'number'){
		return true; //cara 2 console.log(true)
	} else {
		return false;
	}
	//cara 2 bisa manggil dengan console.log(product)
}

	//sdh di kerjain

console.log(hasValidPrice({ "product": "Milk", price: 1.50 })) // true
console.log(hasValidPrice({ "product": "Cheese", price: -1 })) // false
console.log(hasValidPrice({ "product": "Eggs", price: 0 })) // true
console.log(hasValidPrice({ "product": "Cerials", price: '3.0' })) // false
console.log(hasValidPrice()) // false
