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


//table切换，a为触发对象，b为类名。
function table(a,b){
	$(a).click(function(){
		$(a).removeClass(b);
		$(this).addClass(b);
	})
}
table('.bottom_nav li','on');
table('.list li','on');
table('.table button','on')


//input获取焦点事件 
$(function(){ 
	$('input[type = "text"],textarea').bind({ 
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