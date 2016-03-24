
var rootURL = 'http://localhost:8080/toy/webapi/toys';
// full path with parameters 
//?queryType=&argument1=&argument2=
//http://localhost:8080/toy/webapi/toys?queryType=&argument1=&argument2=
var userChoice;
$(document).on('pageshow', '#firstPage', function(){
	/* Add dynamic content, input field and button */
	$('#searchOption').change(function () {
		  userChoice = '';
          $("select option:selected").each(function () {
                userChoice = $(this).val();
				if(userChoice == 'select') { findAllItem(); clearSearchDiv(); }
				else if(userChoice == 'price') { buildSearchOptionInt(); }
				else if(userChoice == 'all') { findAllItem(); clearSearchDiv(); }
				else { buildSearchOptionString(userChoice); }
			});
         // add our submit button on end
      //  $('#firstPageDisplayBox').appendTo( '.ui-page' ).trigger( 'create' );
     //   alert('loader');
          $('#firstPageSearchOption').trigger('create'); // then tell JQM to recreate page because we added new content  	
          $('#firstPage').trigger('pagecreate');    
	}).change();
	/* Inject all items */
	findAllItem();
	
	/* Search Query Handler Unit */
	$('#firstPageSearchBtn').click(function(){
		var arg1 = '';
		if(userChoice == 'price') {
			var arg2 = '';
			arg1 = $('#lowerPrice').val();
			arg2 = $('#upperPrice').val();
			findAllItem(userChoice, arg1, arg2);
			console.log(userChoice + ': '+ arg1 + ' - ' + arg2);
		}
		else {
			arg1 = $('#searchParam').val();
			findAllItem(userChoice, arg1)
			console.log('app.js: ' + userChoice + ': '+ arg1);
		}
	//	$( '#firstPageSearchBtn' ).trigger( 'create' );
	});

	/* Belong to Update operator */
	$('#firstPageDisplayBox').on('click', '.editBtn', function (event) {
		try{
			var urlid = $(this).attr('id');
			var isclass = $(this).attr('class');
			// get the item id -- calls helperGlobal.js
			var editBtnId = chopper(urlid);
			// Creating customized id of each form element, which dynamically changes based on item'id
			var itemId = '#id_' + editBtnId; 
			var itemName = '#name_' + editBtnId;
			var itemBrand = '#brand_' + editBtnId;
			var itemCategory = '#category_' + editBtnId; 
			var itemPrice = '#price_' + editBtnId; 
			var itemQuantity = '#quantity_' + editBtnId;
			var id = $(itemId).val();
			var name = $(itemName).val();
			var brand = $(itemBrand).val();
			var category = $(itemCategory).val();
			var price = $(itemPrice).val();
			var quantity = $(itemQuantity).val();
			// Update item
			console.log('Update fn from app.js: ' + id + '/' + name + '/' + brand + '/' + category + '/' + price + '/' + quantity);
			updateToy(id,name,brand,category,price,quantity);
			event.preventDefault();
		}
		catch(err) {
			alert('ERROR: ' + err);
		}
	});
	// Add new item into DB
	$('#addItemBtnSubmit').click(function(event){
		try{
			var name = $('#addItemName').val();
			var brand = $('#addItemBrand').val();
			var category = $('#addItemCategory').val();
			var price = $('#addItemPriceEuro').val() + '.' + $('#addItemPriceCent').val();
			var quantity = $('#addItemQuantity').val();
			console.log('name:' + name + ' brand:' + brand + ' category:' + category + ' price:' + price + ' qty:' + quantity);
			if(name != '' && brand != '' && category != '' && price != '' && quantity != '') {
				addToy(name, brand, category, price, quantity);
				
			}
			else {
				//alert('Please Complete the Form');
				var str1 = 'All fields are required';
				var str2 = 'Form';
				custom_alert(str1, str2)
			}
			event.preventDefault();
		}
		catch(err) {
			alert('Cant add new item ERROR: ' + err);
		}
		findAllItem();
		//alert('name:' + name + ' brand:' + brand + ' category:' + category + ' price:' + price + ' qty:' + quantity);
	});
	// Clear out new item form
	$('#addItemBtnReset').click(function(){
		$('#addItemName').val('');
		$('#addItemBrand').val('');
		$('#addItemCategory').val('');
		$('#addItemPriceEuro').val('');
		$('#addItemPriceCent').val('');
		$('#addItemQuantity').val('');
		
	});
	
	/* Attach onClick listener to dynamically generated button */
	$('#firstPageDisplayBox').on('click', '.deleteBtn', function (event) {
		try{
			var urlid = $(this).attr('id');
			var isclass = $(this).attr('class');
			// get the item id -- calls helperGlobal.js
			var deleteBtnId = chopper(urlid);
			// Delete item
			deleteToy(deleteBtnId);
			console.log('Delete fn from app.js: ' + deleteBtnId);
			event.preventDefault();
			findAllItem();
		}
		catch(err) {
			alert('Delete ERROR: ' + err);
		}
	});
	
	$('#pageRefresh').click(function(){
		findAllItem();
        $('#firstPageSearchOption').trigger('create'); // then tell JQM to recreate page because we added new content  	
        $('#firstPage').trigger('pagecreate');    
	});
});


