<!doctype html>
<html>
<head>
	<title>Triangular calculator</title>
<body>
<script>
var triangular = function(n){
var input = document.getElementByID("num").value;
var n = parseInt(input);
var result=0
        for(var count=1; count<=n; count++){
                result=count+result;
}
alert(result);
}
</script>
</body>
............button code?
</head>
</html>

<!doctype html>
<html>
<head>
	<title> Fibonacci Calculator </title>
</head>
<body>
<script>
var fibonacci = function(){
	var input = document.getElementByID("num").value;
	var n = parseInt(input);
        if(n==0){
                return 0;
}
        if(n<=2){
                return 1;
}
else{
var result;
var prev=1;
var twoback=0;
        for(count=1; count<n; count++){
                result=prev+twoback;
                twoback=prev;
                prev=result;                    

}
}
alert(result);
}                               
</body>
................button code?
</script>
</html>


