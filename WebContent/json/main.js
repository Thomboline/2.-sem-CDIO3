var rootURL = "http://localhost:8080/something/something"; //ret det lige !

var currentUser;

findAll();

$('#searchKey').keypress(function(e) {
	if (e.which == 13) {
		search($('#searchKey').val());
		e.preventDefault();
		return false;
	}
});

function search(searchKey) {
	if (searchKey == '') 
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
		success: renderList
	});
}

function findByName() {
	consolo.log('findByName: ' + searchKey);
	$.ajax({
		type:'GET',
		url: rootURL + '/search/' + searchKey,
		dataType: "json",
		success: renderList
	});
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
	var userId = $('#userId').val();
	return JSON.stringify({
		"id": userId == "" ? null : userId,
		"username" : $('#username').val(),
		"initialer": $('#initialer').val(),
	});
}