var currentTab = 0;
showTab(currentTab);

function chooseSkill(index) {
	details['skills'][index].value = !details['skills'][index].value;
}

function getName() {
	var completeName = '';
	completeName += document.getElementById('fname').value.trim() + ' ';
	if (document.getElementById('mname').value.trim() != '') {
		completeName += document.getElementById('mname').value.trim() + ' ';
	}
	completeName += document.getElementById('lname').value.trim() + ' ';
	return completeName;
}

function makeReview() {
	document.getElementById("f1").innerHTML = getName();
	document.getElementById("f2").innerHTML = document.getElementById('qual').value.trim();
	document.getElementById("f3").innerHTML = document.getElementById('checkbox1').checked?'Yes':'No';
	document.getElementById("f4").innerHTML = document.getElementById('checkbox2').checked?'Yes':'No';
	document.getElementById("f5").innerHTML = document.getElementById('checkbox3').checked?'Yes':'No';
	document.getElementById("f6").innerHTML = document.getElementById('checkbox4').checked?'Yes':'No';
	document.getElementById("f7").innerHTML = document.getElementById('checkbox5').checked?'Yes':'No';
	document.getElementById("f8").innerHTML = document.getElementById('checkbox6').checked?'Yes':'No';
}

function showTab(n) {
	load();
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		makeReview();
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
}

function redirect(n) {
	var x = document.querySelectorAll("ul li a");
	for (i = 0; i < x.length; i++) {
	    x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
	var y = document.getElementsByClassName("tab");
	y[currentTab].style.display = "none";
	currentTab = n;
	showTab(currentTab);
}

function nextPrev(n) {
	if (n==1 && !validateTab()) { return false; }
	var x = document.getElementsByClassName("tab");
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
		document.getElementById("regForm").submit();
		return false;
	}
	n = currentTab;
	var y = document.querySelectorAll("ul li a");
		for (i = 0; i < y.length; i++) {
			y[i].className = y[i].className.replace(" active", "");
		}
		y[n].className += " active";
	showTab(currentTab);
}

function validateTab() {
	if(currentTab == 0) { return validateName(); }
	else if(currentTab == 1) { return validateQual(); }
	else if(currentTab == 2) { return true;}
	else {
		if(validateName() && validateQual()) {
			return true;
		} else {
			alert('Please fill all fields first');
			return false;
		}
	}
}

function validateName() {
	var i,valid = true;
	var x = document.getElementsByClassName("tab");;
	var y = x[0].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
		if (y[i].value == "" && i!=1) {
			y[i].className += " invalid";
			valid = false;
		}
	}
	return valid;
}

function validateQual() {
	var y = document.getElementsByClassName("tab")[1].getElementsByTagName("input")[0];
	if (y.value == "") {
		y.className += " invalid";
		return false;
	}
	return true;
}

function load() {
	var BG = Math.floor(Math.random() * 5);
	if (BG == 0) { document.body.style.backgroundImage = "url('assets/img/1.jpg')"; }
	else if (BG == 1) { document.body.style.backgroundImage = "url('assets/img/2.jpg')"; }
	else if (BG == 2) { document.body.style.backgroundImage = "url('assets/img/3.jpg')"; }
	else if (BG == 3) { document.body.style.backgroundImage = "url('assets/img/4.jpg')"; }
	else { document.body.style.backgroundImage = "url('assets/img/5.jpg')"; }
}
