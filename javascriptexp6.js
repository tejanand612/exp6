/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function disp(){
    var d = new Date();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    document.getElementById("time").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    
}
setInterval("disp()",1000);


function bgclr(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var color = "rgb("+r+","+g+","+b+")";
    document.body.style.backgroundColor = color;
}
setInterval("bgclr()",3000);

function sizeinc(){
    document.getElementById("p1").style.fontSize="4em";
}
function sizedec(){
    document.getElementById("p1").style.fontSize="2em";
}

var timer;
var ele;
var i=0;
function move(){
    ele = document.getElementById("car");
    var pos = parseInt(ele.style.left);
    console.log(pos);
    ele.style.left = pos+1+"px";
    timer = setTimeout(move,10);
}
function stop(){
    clearTimeout(timer);
}


function show(){
//    function arr(name,r_num,dob){
//        this.firstame = name;
//        this.rollno = r_num;
//        this.dob = dob;
//    }
    var arr = [{name:'teja',r_num:'123',dob:'06-dec-1999'},
        {name:'satish',r_num:'456',dob:'20-apr-1995'},
        {name:'chakri',r_num:'789',dob:'02-mar-1955'},
        {name:'nanda',r_num:'101',dob:'10-dec-2000'}];
    for(var i=0;i<arr.length;i++){
        document.getElementById("array").innerHTML+=arr[i].name+" "+arr[i].r_num+" "+arr[i].dob;
        document.getElementById("array").innerHTML+="<br>";
    }   
}

