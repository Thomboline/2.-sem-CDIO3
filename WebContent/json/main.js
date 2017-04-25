var rootURL = "http://localhost:8080/2.-sem-CDIO3"; 

//findAll();
 
$(document).ready(function() {
	
	$('#create_user').submit(function(event) {
		event.preventDefault();
		createUser();
		return false;
	});
	
	$('#searchKey').keypress(function(event) {
		if (event.which == 13) {
			search($('#searchKey').val());
			event.preventDefault();
			return false;
		}
	});
	
	$('#login').submit(function(event) {
		event.preventDefault();
		login();
		return false;
	});
	
});

function search(searchKey) {
	if (searchKey== '') 
		findAll();
	else
		findByName(searchKey);
}

function findAll() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", 
		//success: renderList
	});
}

function findByName() {
	consolo.log('findByName: ' + searchKey);
	$.ajax({
		type:'GET',
		url: rootURL + '/search/' + searchKey,
		dataType: "json",
		//success: renderList
	});
}

function login() {
	$.ajax({
		type:'GET',
		url: rootURL,
		dataType: "json",
		data: "username=" + username + "&password=" + password,
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			$('div#loginResult').text("responseText: " + XMLHttpRequest.responseText 
	            + ", textStatus: " + textStatus 
	            + ", errorThrown: " + errorThrown);
	        $('div#loginResult').addClass("error");
	            console.log("Login failed")
	    },
	    success: function(data){
	        if (data.error) { 
	            $('div#loginResult').text("data.error: " + data.error);
	            $('div#loginResult').addClass("error");
			} else { // login was successful
				$('form#loginForm').hide();
				$('div#loginResult').text("data.success: " + data.success 
				+ ", data.userid: " + data.userid);
				$('div#loginResult').addClass("success");
			} 
	    }            
   	});
		$('div#loginResult').fadeIn();
	    return false;
}

function createUser() {
	console.log('createUser');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL, 
		dataType: "json",
		data: formToJSON(), 
		success: function(data, textStatus, jqXHR) {
			alert('User created successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('Create user failed: ' + textStatus);
		}
	});
}

function formToJSON() {
	var userId = $('#userid').val();
	console.log("Pre stringify")
	return JSON.stringify({
//		"id": userId == "" ? null : userId,
		"id" : $('#userid').val(),
		"username" : $('#username').val(),
		"firstname" : $('#firstname')
	});
}