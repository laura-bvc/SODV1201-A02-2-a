/**
* @name: Assignement2
* @Course Code: SODV1201
* @class: Software Development Diploma program
* @author: Laurainda Fan
**/

const url = 'https://sodv1201-a02-2-b.onrender.com/user';
//const url = 'http://localhost:8080/user';


$(document).ready(function(){
	
	// A2 - Q2-a registration form submit
	if ($("#div_reg").length ) {
		$("#bu_submit").click(function() {
			//get the confirmation notice to show ID, Full name, Address, status and fee
			//student - 10$, staff - 50$, volunteer - 0$
			
			$("#div_reg").hide();
			let id = $("#bvcID").val();
			let fName = $("#name").val();
			let address = $("#address").val();
			let fee = 0;
			let reg_stat = $('input[name="status"]:checked').val();
			switch (reg_stat) {
				case 'student':
					fee = 10;
					break;
				case 'staff':
					fee = 50;
					break;
				case 'volunteer':
					fee = 0;
					break;
			}
			
			fetch(url, {
				method: "POST",
				body: JSON.stringify({
					id: id,
					name: fName,
					address: address,
					status: reg_stat
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});

			
			$("#home_content").append('<div>You are registered to the event as a <em>' + 
				reg_stat + '</em></div>' + '<div><em>BVC ID: </em>' + id + '</div>' +
				'<div><em>Full Name: </em>' + fName + '</div>' + 
				'<div><em>Address: </em>' + address + '</div>' +
				'<div><em>Fee: </em>$' + fee + '</div></div>');
			
		});
	}

});