var btn = document.querySelectorAll('.btn');
[].slice.call(btn).forEach(function (elm) {
	elm.setAttribute('onclick', 'enter(this.form, this.value)');
});
function compute(obj){
	obj.expr.value = eval(obj.expr.value)
}
function enter(obj, string){
	obj.expr.value += string
}
function clear(obj){
	obj.expr.value = ''
}