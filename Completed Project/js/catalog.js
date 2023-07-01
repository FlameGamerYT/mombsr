class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"Mombar - Appetizer", code:"mombara", image:"mombara.jpg",description:"Experience a delightful blend of traditional flavors with our Mombar appetizer. Hand-stuffed sausages filled with rice, succulent beef, tender lamb, aromatic herbs, and a selection of finely ground spices. Sautéed to perfection with garlic, chickpeas, and tomatoes for an unforgettable taste experience.",price:13.00},
			{id:2,name:"Semman - Appetizer", code:"semman", image:"semman.jpg",description:"Indulge in our Semman appetizer, featuring tender quail served atop a bed of fresh greens, petite quail eggs, and garnished with our secret blend of house spices. A gourmet delight that is as pleasing to the eye as it is to the palate.",price:15.00},
			{id:3,name:"Sahara Mix - Appetizer", code:"saharamix", image:"saharamix.png",description:"Our Sahara Mix is a harmony of Middle Eastern flavors. Creamy hummus, savory foul, smoky babaganoush, and rich cheese come together beautifully on our toasted homemade bread. A true taste of the Sahara in each bite.",price:17.00},
			{id:4, name:"Besara - Appetizer", code:"besara", image:"basara.jpg", description:"Indulge in a Southern Egyptian favorite, our Besara appetizer. A smooth puree of fava beans paired with Moulekhia, a hint of coriander, and sautéed onions. It’s a comforting and flavorful start to your meal.", price:12.00},
			{id:5, name:"Mussels-Sayadia - Appetizer", code:"musselssayadia", image:"musselsayadia.jpg", description:"Experience the taste of the sea with our Mussels-Sayadia. Fresh mussels cooked in a tantalizing mix of garlic, tomato, and Chef's special blend of spices. A taste sensation that will transport you to Mediterranean shores.", price:15.00},
			{id:6, name:"Salata - Appetizer", code:"salata", image:"salata.jpg", description:"Discover the freshness of our Salata, the Chef's Salad of the Day. Prepared using the freshest ingredients of the season, it's the perfect light and crisp appetizer to complement any meal.", price:12.00},
			{id:7, name:"Mombar - Main Course", code:"mombarm", image:"mombarm.jpg", description:"Savor the rich, hearty flavors of our Mombar main course. Hand-stuffed sausages filled with rice, succulent beef, tender lamb, aromatic herbs, and spices, all sautéed with garlic, chickpeas, and tomatoes. It's a traditional feast that will transport your taste buds.", price:22.00},
			{id:8, name:"Shrimp Alexandria - Main Course", code:"shrimpalexandria", image:"shrimpalex.jpg", description:"Experience a taste of the Mediterranean with our Shrimp Alexandria. Succulent shrimp cooked with onions, garlic, and peppers, served over perfectly cooked rice. A dish that is as flavorful as it is satisfying.", price:28.00},
			{id:9, name:"Dajaj Fel-Forn - Main Course", code:"Dajaj", image:"dajaj.jpg", description:"Delight in our Dajaj Fel-Forn, a culinary masterpiece of stuffed chicken with rice, vibrant vegetables, aromatic herbs, and spices. A satisfying meal that brings together thebest of traditional Egyptian flavors.", price:24.00},
			{id:10, name:"Sayadia - Main Course", code:"sayadia", image:"sayadia.jpg", description:"Immerse yourself in the flavors of the sea with our Sayadia. A medley of baked shrimp, mussels, and calamari, each prepared to perfection. A symphony of seafood that's sure to delight.", price:28.00},
			{id:11, name:"Dajaj Bel-Zitoon - Main Course", code:"DajajZ", image:"chickentajeen.jpg", description:"Relish our Dajaj Bel-Zitoon, a tantalizing chicken tajeen dish featuring succulent chicken paired with tangy olives. An irresistible combination that is sure to satisfy.", price:20.00},
			{id:12, name:"Baked Stripped Bass - Main Course", code:"Bass", image:"bass.jpg", description:"Savor the exquisite flavors of our Baked Stripped Bass. Fresh bass baked to perfection in a clay pot with a medley of vegetables, garlic, cumin, coriander, and rice. A taste of the sea in every bite.", price:28.00},
			{id:13, name:"Arnab Tajeen - Main Course", code:"arnab", image:"lambtajeen.png", description:"Delight in our Arnab Tajeen, a tantalizing dish featuring tender rabbit paired with vibrant vegetables and sweet dried fruit. A blend of flavors that is sure to surprise and please.", price:35.00},
			{id:14, name:"Egyptian Style Steak", code:"steak", image:"steak.jpg", description:"Savor the rich flavors of our Egyptian Style Steak. A robust roasted steak with onions, garlic, and pepper, served with golden crispy potatoes and topped with a blend of Egyptian herbs and spices. A feast for the senses.", price:36.00},
			{id:15, name:"Arnab Moulekhia", code:"arnabm", image:"arnabm.jpg", description:"Experience the unique flavors of our Arnab Moulekhia. Tender rabbit served with moulekhia and Egyptian rice. A traditional dish that brings together the best of Egyptian cuisine.", price:35.00},
			{id:16, name:"Lamb Tajeen over Couscous", code:"lambtajeen", image:"lambtajeen.png", description:"Indulge in our Lamb Tajeen, a dish featuring tender, braised lamb paired with a medley of vibrant vegetables, sweet dried fruit, and the Chef's special blend of spices. Served over fluffy couscous for a satisfying meal.", price:24.00},
			{id:17, name:"Glazed Duck with Egyptian Molasses", code:"duck", image:"duck.jpg", description:"Savor the sweet and savory flavors of our Glazed Duck. A duck baked in a clay pot, glazed with Egyptian molasses. A unique dish that offers a taste of Egyptian tradition.", price:35.00},
			{id:18, name:"Egyptian Style Lamb Chops", code:"lambchops", image:"lambchops.jpg", description:"Relish the succulence of our Egyptian Style Lamb Chops. Roasted to perfection, these lamb chops are served with onions, garlic, pepper, and potatoes. Topped with Egyptian herbs and spices, this dish is a celebration of flavors.", price:36.00},
			{id:19, name:"Vegetarian Couscous", code:"vegcouscous", image:"vegcouscous.jpg", description:"Experience our Vegetarian Couscous, a medley of fresh vegetables served over fluffy couscous. A hearty, healthy, and satisfying meal that proves vegetarian dishes can be just as indulgent.", price:18.00},
			{id:20, name:"Lamb Shanks", code:"lambshank", image:"lamb-shank.jpg", description:"Savor the rich, succulent flavors of our Lamb Shanks. Slow-baked to perfection, these lamb shanks are served with fresh greens and your choice of fluffy rice or couscous. A meal that's sure to leave you wanting more.", price:28.00}
		];
	}
	getProducts(){return this.products;}
	getItem(code)
	{
		 for (let i=0; i<this.products.length; i+=1)
		 {
			 if(this.products[i].code==code) return this.products[i];
		 } 
		 return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			 if(this.products[i].code==code) return true;
		} 
		 return false;
	}
}

class ItemOrder 
{
	constructor(item) {this.item=item;this.numItems=1;}
	getItem(){return this.item;}
	setItem(item){this.item = item;}
	getNumItems(){return this.numItems;}
	setNumItems(n){this.numItems = n;}
	getItemId(){return((this.getItem()).id);}
	getItemCode(){return((this.getItem()).code);}
	getItemName(){return((this.getItem()).name);}
	getItemImage(){return ((this.getItem()).image); }
	getDescription(){return((this.getItem()).description);}
	getUnitCost(){return((this.getItem()).price).toFixed(2);}
	incrementNumItems(){this.setNumItems(parseInt(this.getNumItems()) + 1);}
	cancelOrder(){this.setNumItems(0);}
	getTotalCost(){return(parseInt(this.getNumItems()) * parseFloat(this.getUnitCost())).toFixed(2);} 
}

class ShoppingCart
{
	constructor(userid) 
	{
		this.userid=userid;
		this.itemsOrdered=[];
		this.loadCart();
	}
	getItemImage(id)
	{
		alert("In getItemImage:"+this.itemsOrdered.length);
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert(item.getItemId());
			if(item.getItemId()==id)
			{
				alert("Found Item:");
				return (this.itemsOrdered[i]).getItemImage();
			}
		}
		return '';
	}
	getItemsOrdered() {return this.itemsOrdered ;}
	printShoppingCart()
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert("id="+item.getItemId()+ ": desc="+item.getDescription()+" qty="+item.getNumItems());
		}
	}
	addItem(itemCode) 
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				(this.itemsOrdered[i]).incrementNumItems();
				this.storeCart();
				return;
			}
		}	
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	setNumOrdered(itemCode,numOrdered) 
	{ 
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				if(numOrdered<=0)
				{
					this.itemsOrdered.splice(i,1);
					this.storeCart();
					return;
				}
				else
				{
					(this.itemsOrdered[i]).setNumItems(numOrdered);
					this.storeCart();
					return;
				}
			}
		}
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		newOrder.setNumItems(numOrdered);
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	getTotalCost()
	{
		let total=0;
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			total+=parseFloat(item.getTotalCost());
		}
		return total.toFixed(2);
	}
	addTax()
	{
		let total=parseFloat(this.getTotalCost());
		return (total*.1+total).toFixed(2);
	}

	addShipping(shipcost=0)
	{
	  return(parseFloat(this.addTax())+parseFloat(shipcost)).toFixed(2);
	}
	
	emptyShoppingCart()
	{
	    this.itemsOrdered=[];
	    var usercart=this.userid+"cart";  
	    setCookie(usercart,"",-1);
	}
	storeCart()
	{
		var usercart=this.userid+"cart";
		var cart="";
		var atleastone=false;
		let items=this.getItemsOrdered();
		for(let i=0;i<items.length;i++)
		{
			var qty=parseInt(items[i].getNumItems());
			if(qty>=1)
			{
				cart=cart+(items[i].getItemCode()+":"+qty+"@");
				atleastone=true;
			}
		}
		if(atleastone)
		{
			cart=cart.substring(0,cart.length-1);
			setCookie(usercart,cart,30);
		}
		else setCookie(usercart,"",-1);
	}
	loadCart()
	{
		let cartname=this.userid+"cart";
		let cart=getCookie(cartname);
		if(cart != null)
		{
			var str=cart.split("@");
			for(var i=0;i<str.length;i++)
			{
				var item=str[i].split(":");
				var cookiename=item[0];
				var cookievalue=item[1];
				this.setNumOrdered(cookiename,cookievalue);
			}		
		}
	}
}
