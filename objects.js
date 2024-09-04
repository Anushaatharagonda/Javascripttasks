//literal
var emp={id:21,name:"Anu",age:23}
document.write(emp.id+""+emp.name+""+emp.age+"<br/>");

//new keyword
var emp=new Object();
emp.id=1434;
emp.name="Anitha";
emp.salary=34434;
document.write(emp.id+""+emp.name+""+emp.salary);
//Function
function student(rno,name,branch){
    this.rno=rno;
    this.name=name;
    this.branch=branch;
}
var stu=new student(132,"afghgjh","cse");
document.write(stu.rno+""+stu.name+""+stu.branch);
//date
var today=new Date();
document.write(today);
var today=new Date();
var day=today.getDay();
var date=today.getDate();
var month=today.getMonth();
var year=today.getFullYear();
// Display the date
document.write("Today's date is: " + day + "/" + date+"/"+ month + "/" + year);

let sec=today.getSeconds();
console.log(sec);


