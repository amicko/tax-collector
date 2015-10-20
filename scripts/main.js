'use strict';
var $ = require('jquery');
var jquery = $;

var $form = $('#form');
var $amount = $('#amount');
var $state = $('#state');

$form.on('submit', function(e) {
	e.preventDefault();
	// console.log($amount.val());
	// console.log($state.val().toLowerCase());
	if($state.val().toLowerCase() === 'wi' || $state.val().toLowerCase() === 'wisconsin') {
		console.log(Math.round($amount.val() * 105.5)/100);
		$('.results').html(
			'<div>Subtotal: ' + $amount.val() + '</div> <div>Tax: ' + Math.round($amount.val() * 5.5)/100 + '</div> <div>Total: ' + Math.round($amount.val() * 105.5)/100 + '</div>'
		)
	}
	else {
		console.log($amount.val());
		$('.results').html(
			'<div>Total: ' + $amount.val() +'</div>'
		)
	}
})