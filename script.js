//declarations
var cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var order = 'desc';
var listGroup = document.getElementById('listGroup');
render();

function render() { 
    clearFormGroup();
	cols.forEach(col => {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(col));
		addbgColor(li, col);
		listGroup.appendChild(li);
	});
};


function sort() {
	if (order == 'asc') {
		order = 'disc';
		return cols.sort((a, b) => a - b);
	} else {
		order = 'asc';
		return cols.sort((a, b) => b - a);
	}
}

function sortNum() {
	cols = sort();
	render();
};

function clearFormGroup() {
	listGroup.innerHTML = "";
}

function shuffleNum() {
	cols = shuffle();
	
	render();
};

function shuffle() {
	for (let i = cols.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cols[i], cols[j]] = [cols[j], cols[i]];
	}
	return cols;
}

function addbgColor(li, col) {
   var screenWid = document.documentElement.clientWidth;
   var getScreenWidth = (screenWid < 375);
	switch (col) {
		case 2:
		case 4:
			getScreenWidth ? li.style.borderLeft = "5px solid #2B8EAD" : li.style.backgroundColor = "#2B8EAD";
			break;
		case 3:
		case 5:
		case 9:
			getScreenWidth ? li.style.borderLeft = "5px solid #164c5c" : li.style.backgroundColor = "#164c5c";
			break;
		case 1:
		case 8:
		    getScreenWidth ? li.style.borderLeft = "5px solid #77b1c3" : li.style.backgroundColor = "#77b1c3";
			break;
		default:
		   getScreenWidth ? li.style.borderLeft = "5px solid #CCCCCC" : li.style.backgroundColor = "#CCCCCC";
	}
}

// reload on window 375px
function setBorderBg(li){
    var getListAttr;
     if(document.documentElement.clientWidth<375) {
	     getListAttr = li.style.backgroundColor;
	 }else {
		getListAttr = li.style.borderLeft;
	 }
	 return getListAttr
}
