//var rootURL = "http://localhost:8080/rest"; 

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
		method: 'POST',
		//contentType: 'application/json',
		url: "rest/service",
		dataType: "json",
		data: formToJSON(),
		success: function(data) {
			console.log(formToJSON());
			
			alert('User created successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('Create user failed: ' + textStatus + errorThrown + jqXHR);
		}
	});
}

function formToJSON() {
	// e.g. lav et javascript objekt, der indeholder alt information
	// og derefter kør stringify
	
//	var userID = $('#id').val();
//	"id": userID == "" ? null : userID, 
			
	return JSON.stringify({
		"userID":$('#id').val(),
		"username":$('#user').val(), 
		"password":$('#pass').val(),
		"ini":$('#ini').val(),
		"CPR":$('#cpr').val(),
		"role":$('#centerbutton').val()
	});
	
//	var username = create_user.elements["username"].value;
//	var password = create_user.elements["password"].value;
//	var initials = create_user.elements["initials"].value;
//	var cpr = create_user.elements["cpr"].value;
//	var role = create_user.elements["role"].vaue;
//	var user = { "username": username, "password": password, "initials": initials, "cpr": cpr, "role": role};
//	return JJSON.stringify(user);
	
}