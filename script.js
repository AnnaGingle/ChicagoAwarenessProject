function toggleHamburger() {
	var element = document.getElementById("navbar");
	if (element.style.width === "100%") {
		element.style.width = "0%";
	} else {
		element.style.width = "100%";
	}
  }