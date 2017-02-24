function resetPage() {
	var deviceWidth = document.documentElement.clientWidth,
	scale = deviceWidth/640;
	document.body.style.zoom = scale;
}
window.onload = function(){
	resetPage();
}
window.onresize = function(){
	resetPage();
}

$('.num span:nth-child(1)').click(function(){
	
	console.log(1)
	console.log($(this).parents('p').html())
})

$(function(){ 
	$('li input,textarea').bind({ 
		focus:function(){ 
			if (this.value == this.defaultValue){ 
				this.value=""; 
			} 
		}, blur:function(){ 
			if (this.value == ""){ 
				this.value = this.defaultValue; 
			} 
		} 
	}); 
})