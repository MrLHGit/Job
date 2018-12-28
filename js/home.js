var times;
window.onload = function() {
	setInterval("redom()", 2000);
	setInterval("redom1()", 5000);
	times=setInterval("lun()", 5000);
}
mas = ["扫地机器人", "全自动洗衣机", "微波炉", "24寸电视", "笔记本电脑", "奥克斯空调", "CPU", "RTX2080", "GPU", "美的变频空调", "海尔洗衣机", "黑鲨游戏手机",
	"小米MIX3", "华为荣耀10", "华为Mate20", "ATIRX580", "海盗船DDR4 8G "
]

function redom() {
	var s = rd(16, 0);
	document.getElementById("key").placeholder = mas[s];
}

function rd(max, min) {
	var a = Math.floor(min + Math.random() * (max - min + 1));
	return a;
}
var he = ["美妆圣诞季", "超大额优惠", "好物好家电", "旅游出行惠"];
function redom1() {
	var s = rd(3, 0);
	document.getElementById("style-red").innerHTML = he[s];
}
var l = Number(0);
var arr=["l1","l2","l3","l4","l5","l6","l7","l8"];
function lun(){
	for(i in arr){
		if((i)==l){
			document.getElementById(arr[i]).style.zIndex=0;
		}else{
			document.getElementById(arr[i]).style.zIndex=-1;
		}
	}
	l++;
	if (l == 8) {
		l= 1;
	}
}

