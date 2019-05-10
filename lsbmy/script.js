var images1 = [
	"Images/p1.jpg",
	"Images/p2.jpg",
	"Images/p3.jpg",
	"Images/p4.jpg",
	"Images/p5.jpg",
	"Images/p6.jpg"
];
var text = [
	"м. Городок",
	"проспект Свободи",
	"вул. Городоцька-Чернівецька-Залізнична",
	"вул. Городоцька",
	"площа Князя Осмомисла",
	"площа Князя Осмомисла"
];
var images2 = [
	"Images/p9.jpg",
	"Images/p10.jpg",
	"Images/p11.jpg",
	"Images/p12.jpg",
	"Images/p13.jpg",
	"Images/p14.jpg"
];
var car = [
	"Машина горизонтального буріння",
	"Екскаватор JCB-3CX",
	"Міні-екскаватор JCB",
	"КамАЗ",
	"Краз",
	"Зіл"
];
var num = 0;
function prev(){
	num--;
	if(num<0){
	num = images1.length - 1;}
	document.getElementById("image-1").src = images1[num];
	document.getElementById("work").innerHTML = text[num];
}
function next(){
	num++;
	if(num >= images1.length){
	num = 0;}
	document.getElementById("image-1").src = images1[num];
	document.getElementById("work").innerHTML = text[num];
}
function prev2(){
	num--;
	if(num<0){
	num = images1.length - 1;}
	document.getElementById("image-2").src = images2[num];
	document.getElementById("car").innerHTML = car[num];
}
function next2(){
	num++;
	if(num >= images1.length){
	num = 0;}
	document.getElementById("image-2").src = images2[num];
	document.getElementById("car").innerHTML = car[num];
}
function leave_coments() {
	var username = document.getElementById("name1");
  	var coment = document.getElementById("coment1");
  	if(username.value == ""){ alert("Будь ласка, введіть своє ім'я! Дякую)"); return false;}
  	else {
  		var dv1 = document.createElement("P");
  		var dv2 = document.createElement("P");
  		var dv3 = document.createElement("P");
  		var date1 = new Date();
  		dv3.style.margin = "0px 0px 0px 10px";
		dv3.style.color = "rgb(47,79,79)";
  		dv3.style.fontSize = "medium";
  		dv1.style.color = "blue";
  		dv1.style.fontSize = "x-large";
  		dv1.innerHTML.fontFamily = "Arial,serif";
  		dv1.style.margin = "0px 0px 0px 10px";
  		dv2.style.color = "rgb(47,79,79)";
  		dv2.style.fontSize = "large";
  		dv2.innerHTML.fontFamily = "Arial,serif";
  		dv2.style.margin = "5px 0px 10px 10px";
  		dv1.innerHTML = username.value;
  		dv3.innerHTML = date1.getDay() + "." + date1.getMonth() + "." + date1.getFullYear() + "  " + date1.getHours() + ":" +
  		date1.getMinutes() + ":" + date1.getSeconds();
  		dv2.innerHTML = coment.value;
  		document.getElementById("get_coment").appendChild(dv1);
  		document.getElementById("get_coment").appendChild(dv3);
  		document.getElementById("get_coment").appendChild(dv2);
	}
}