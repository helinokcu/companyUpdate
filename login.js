var objPeople = [
	{ // Object @ 0 index
		username: "omer",
		password: "123",
		type: "1"
	},
	{ // Object @ 1 index
		username: "helin",
		password: "987",
		type: "2"
	},
	{ // Object @ 2 index
		username: "ege",
		password: "123",
		type: "1"
	},
	{ // Object @ 3 index
		username: "sinan",
		password: "987",
		type: "2"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			window.alert("Login Successful");
			if (objPeople[i].type == 1) {
				window.location.replace("manager.html");
			}
			
			else {
            window.location.replace("employee.html");
			}
			return
		}
	}
	console.log("incorrect username or password")
    window.alert("Login Invalid");
}