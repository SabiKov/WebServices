/* This is a helper class to handle CURD requestes */

var rootURL = 'http://localhost:8080/toy/webapi/toys';
var queryTypeRootURL = '?queryType=';
var argument1RootURL = '&argument1=';
var argument2RootURL = '&argument2=';
var findAllRootURL = 'http://localhost:8080/toy/webapi/toys?queryType=&argument1=&argument2=';

/* Request all toy item */
function findAllItem() {
	console.log('findiAll');	
	$.ajax({
		type: 'GET',
		url: findAllRootURL,
		dataType: 'json',
		success: createListview
	});
}

/* Find item based on one parameter */
function findAllItem(queryType, param1) {
	console.log('two param');
	$.ajax({
		type: 'GET',
		url: rootURL + queryTypeRootURL + queryType + argument1RootURL + param1,
		dataType: 'json',
		success: createListview
	});
	console.log(rootURL+queryTypeRootURL+queryType+argument1RootURL+param1);
}
/* Find item based on two parameters */
function findAllItem(queryType, param1, param2) {
	console.log('two param');
	$.ajax({
		type: 'GET',
		url: rootURL + queryTypeRootURL + queryType + argument1RootURL + param1 + argument2RootURL + param2,
		dataType: 'json',
		success: createListview
	});
	console.log(rootURL+queryTypeRootURL+queryType+argument1RootURL+param1);
}
/* Generates a jqm listview model */
function createListview(data) {
	//console.log(data[0].id + data[0].name + data[0]. category + data[0].brand + data[0].price + data[0].quantity);
	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$('#firstPageDisplayBox').empty();
	//alert('Hey');
	$.each(list, function(index, toy) {
		$('#firstPageDisplayBox').append('<form id="form_' + toy.id + '">\
											<div data-role="collapsible"  data-mini="true" style>\
												<legend>'+ toy.name +'<span class="ui-li-count">qty:'+ toy.quantity + '</span></legend>\
												<ul class="myBtn" data-role="listview" data-inset="true">\
													<li class="ui-field-contain ui-grid-b myBtn">\
														<div class="ui-block-a">\
															<label style="background-color:#ede9ce;" for="' + toy.id + '">ID:</label>\
															<input style="background-color:#b5a397;color:black;opacity:1.0;" readonly="readonly" name="' + toy.id +'" id="id_' + toy.id + '" value="'+ toy.id +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-b">\
															<label style="background-color:#ede9ce;" for="' + toy.name + '">Name:</label>\
															<input style="background-color:#b5a397;" name="' + toy.name +'" id="name_'+ toy.id +'" value="'+ toy.name +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-c">\
															<label style="background-color:#ede9ce;" for="' + toy.brand + '">Brand:</label>\
															<input style="background-color:#b5a397;" name="' + toy.brand +'" id="brand_'+ toy.id +'" value="'+ toy.brand +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-a">\
															<label style="background-color:#ede9ce;" for="' + toy.category + '">Category:</label>\
															<input style="background-color:#b5a397;" name="' + toy.category +'" id="category_'+ toy.id +'" value="'+ toy.category +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-b">\
															<label style="background-color:#ede9ce;" for="' + toy.price + '">Price:</label>\
															<input style="background-color:#b5a397;" name="' + toy.price +'" id="price_'+ toy.id +'" value="'+ toy.price +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-c">\
															<label style="background-color:#ede9ce;" for="' + toy.quantity + '">Quantity:</label>\
															<input style="background-color:#b5a397;" name="' + toy.quantity +'" id="quantity_'+ toy.id +'" value="'+ toy.quantity +'" type="text" data-mini="true">\
														</div>\
														<div class="ui-block-a">\
														</div>\
														<div class="ui-block-b">\
															<a href="#" class="ui-btn ui-mini ui-icon-edit ui-btn-icon-left ui-corner-all editBtn" id="editBtn_'+ toy.id +'" style="background-color:#334431;color:white;letter-spacing:2px;font-family:Georgia, Serif;">Edit</a>\
														</div>\
														<div class="ui-block-c">\
															<a href="#" class="ui-btn ui-mini ui-icon-delete ui-btn-icon-left ui-corner-all deleteBtn" id="deleteBtn_'+ toy.id +'" style="background-color:#e05038;color:white;letter-spacing:2px;font-family:Georgia, Serif;">Delete</a>\
														</div>\
													</li>\
												</ul>\
											</div>\
										</form>');	
		//$('#firstPageDisplayBox').trigger('create');
		$('#firstPageDisplayBox').trigger( 'create' );
	});
	$('#firstPage').trigger('pagecreate');
}

/* Add Update Item, aka whenever the edit button is pressed */
function updateToy(id, name, brand, category, price, quantity) {
	//alert(rootURL + '/' + id);
	//console.log('updateToy: ' + ' id:'+id + ' name:'+name + ' brand:' + brand + ' category:'+ category + ' price:' + price + ' qty: ' + quantity );
	$.ajax({
		type: 'PUT',
		contentType: 'application/json',
		url: rootURL + '/' + id,
		dataType: "json",
		data: formToJSON(id, name, brand, category, price, quantity),
		success: function(data, textStatus, jqXHR) {
			alert('Toy item updated successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateToy error:' + textStatus);
		}
	});
}

/* Add new item */
function addToy(name, brand, category, price, quantity){
	console.log('add item');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL,
		dataType: "json",
		data: formToJSONAdd(name, brand, category, price, quantity),
		success: function(data, textStatus, jqXHR) {
			alert('New item was added successfully');
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert('add new item error: ' + textStatus);
		}
	});
}
/* Delete Item */
function deleteToy(id) {
	console.log('delete item');
	$.ajax({
		type: 'DELETE',
		url: rootURL + '/' + id,
		success: function(data, textStatus, jqXHR) {
			alert('Item was removed successfully: ' + textStatus);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert('deleteWine error: ' + textStatus);
	}
	});
}
