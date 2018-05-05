window.onload = function() {

	var oLi = document.getElementsByTagName('li');
	var oA = document.getElementsByTagName('a');



	for(var i = 0; i < oLi.length; i++) {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			var a = Number(Math.random().toFixed(1))
			oLi[i].style.boxShadow = '1px 2px 2px rgb(' + r + ',' + g + ',' + b + ')';
			oLi[i].style.border = '1px solid rgb(' + r + ',' + g + ',' + b + ')';
			oA[i].style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
	}
	setInterval(function() {
		for(var i = 0; i < oLi.length; i++) {
			r = Math.floor(Math.random() * 256);
			g = Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);
			a = Number(Math.random().toFixed(1))
			oLi[i].style.boxShadow = '1px 2px 2px rgba(' + r + ',' + g + ',' + b + ',' + 1 +')';
			oLi[i].style.border = '1px solid rgba(' + r + ',' + g + ',' + b + ',' + 1 +')';
			oA[i].style.color = 'rgb(' + r + ',' + g + ',' + b + ')';




		}
	}, 2000);

	for (var i = 0;i<oLi.length;i++) {
		oLi[i].onmouseover = function(){
				this.style.boxShadow = '2px 5px 4px #f0f';
			}
		oLi[i].onmouseout = function(){
				this.style.boxShadow = '1px 2px 2px rgba(' + r + ',' + g + ',' + b + ',' + a +')';

			}
	}
}