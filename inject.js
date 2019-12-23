// The code below will be injected into 'https://sylverant.net/'. This is what makes the server status realtime.

(function () {
	// Repurpose the 'Home' link under 'Navigation' to be the 'Sylverant Login' page, which is more useful.
	document.getElementsByTagName("a")[0].setAttribute("id", "login");
	document.getElementById("login").href = "https://wsgi.sylverant.net/login.py";
	document.getElementById("login").textContent = "Sylverant Login";

	// Change the name of the server status card to reflect this new realtime functionality.
	document.getElementsByTagName("span")[1].setAttribute("id", "server-status-card-name");
	document.getElementById("server-status-card-name").textContent = "PSO Population";
	// document.getElementById("server-status-card-name").style = "font-size: 69%;";

	// Attach ID 'server-count' to the button used to manually refresh.
	document.getElementsByTagName("a")[11].setAttribute("id", "server-count");
	document.getElementById("server-count").textContent = " ";

	// Ping Server and Retrieve An Update Every two Seconds.
	setInterval(function () {
		// Show Server Pings.
		console.warn('%c 🌎 Sylverant Realtime Server Status is running on your machine.... ', 'color: #69ab3d');
		// Refresh Server Status.
		document.getElementById("server-count").click();
	}, 2000); // Repeat this function every two seconds for continuous updates.

	// Clear the console so the user can clearly view the incoming DOM pings.
	console.clear();
})();