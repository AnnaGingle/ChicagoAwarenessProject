function toggleHamburger() {
	var element = document.getElementById("navbar");
	var element2 = document.getElementById("hamburger");
	//What this if statement below states is that whenever the hamburger gets toggled adjust the width of the nav overlay - if the overlay is at 100% width and open then it needs to go down to 0% and closed.
	if (element.style.width === "100%") {
		element.style.width = "0%";
		element2.style.visibility = "visible";
	} else {
		element.style.width = "100%";
		element2.style.visibility = "hidden";
	}
}