/**
 *  This file contains general functions
 */

/* Chop off bits from string */
function chopper(param1) {
	
	return param1.split("_").pop();
}

/* Cooking JSON data from selected form */
function formToJSON(id, name, brand, category, price, quantity) {
	console.log('Cooking json: ' + ' id:'+id + ' name:'+name + ' brand:' + brand + ' category:'+ category + ' price:' + price + ' qty: ' + quantity );
	itemId = id;
	//alert(id + name + brand + category + price + quantity);
	return JSON.stringify({
		'id': itemId == '' ? null : itemId,
		'name': name,
		'brand': brand,
		'category': category,
		'price': 'price',
		'quantity': quantity
	});
}

/* Cooking JSON data from selected form */
function formToJSONAdd(name, brand, category, price, quantity) {
	console.log('Cooking json: ' + ' name:'+name + ' brand:' + brand + ' category:'+ category + ' price:' + price + ' qty: ' + quantity );
	//alert(id + name + brand + category + price + quantity);
	return JSON.stringify({
		'name': name,
		'brand': brand,
		'category': category,
		'price': 'price',
		'quantity': quantity
	});
}

/* Custom dialog */
function custom_alert(output_msg, title_msg) {
    if (!title_msg)
        title_msg = 'Alert';

    if (!output_msg)
        output_msg = 'No Message to Display.';

    $("<div></div>").html(output_msg).dialog({
        title: title_msg,
        resizable: false,
        modal: true,
        buttons: {
            "Ok": function() 
            {
                $( this ).dialog( "close" );
            }
        }
    });
}

