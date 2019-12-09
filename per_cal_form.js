var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfy');
form.addEventListener('submit', function (event) {	
//    alert("We Clicked something!!");	
if (!n1.value || !n2.value) {
		alert("Please enter some values in the text fields");
	}
	else {
	var x = parseFloat(n1.value);
	var y = parseFloat(n2.value);
		
	var resultField = x / y;
	var percent = resultField * 100;
		
//	alert("The result is : "  + percent + "%");
//	console.log(percent);
	resultField.innerHTML = "Answer : " + percent + " %";
	event.preventDefault();
		}
	}
);