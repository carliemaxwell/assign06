var triangular = function(n){
var input = document.getElementById("number").value;
var n = parseInt(input);
var result=0
        for(var count=1; count<=n; count++){
                result=count+result;
}
var output = document.getElementById('result');
output.innerHTML = 'the number is ' + result;
}
var button = document.getElementById('runner');
button.onclick = triangular;

 
var fibonacci = function(){
	var input = document.getElementById("num").value;
	var n = parseInt(input);
	var result;
        if(n==0){
                result = 0;
	}
        if(n<=2){
                result = 1;
	}
	else{
		var prev=1;
		var twoback=0;
        	for(count=1; count<n; count++){
                	result=prev+twoback;
                	twoback=prev;
                	prev=result;                    

		}
	}
}
var output = document.getElementById('res');
output.innerHTML = 'the number is ' + result;
}
var button = document.getElementById('run');
button.onclick = fibonacci;

