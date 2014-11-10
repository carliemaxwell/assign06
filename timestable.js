var buildTable = function(data){
var table = document.createElement('table');
for(var c=0; c<11; c++){
	var row = document.createElement('tr');
	var cell = document.createElement('td');
	cell.textContent =data[1]+'*'+c+'='+data[c];
	row.appendChild(cell);
	table.appendChild(row);
}
	return table;
}

var makeTimesTable = function (n){
var input = document.getElementById("number").value;
var n = parseInt(input);
var products = []
        for(var c=0; c<=10; c++){
        products[c] = n*c;
}
        return products;
}

var getInput = function(){
var input = document.getElementById("number").value;
var n = parseInt(input);
return n;
}

var run = function(){
        var num = getInput();
        var inp = makeTimesTable(num);
	document.body.appendChild(buildTable(inp));
}

var button = document.getElementById('runner');
button.onclick = run;
