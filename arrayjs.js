//array is literal
let domains=[];
document.write(domains);
let skills=["Html","Css","javascript","reackjs"];
document.write(skills);
//array is constructor new keyword

let courses=["java","python","htmlcss","testing"];
document.write(courses);
document.write(courses[1]);


//array by using forloop
var student=["Anusha","ramya","Anitha","Pavani","Raju","Bhar"];
for(i=0;i<=student.length;i++){
    document.write(student[i]+"<br/>");
}
//array by using while loop
var i=0;
var stu=new Array();
stu[0]="Telangana";
stu[1]="goa";
stu[2]="kerala";
stu[3]="chennai";
stu[4]="gujarat";
stu[5]="Andhra pradesh";
while(i<stu.length){
    document.write(stu[i]+"<br/>");
    i++;
}
//modify
stu[5]="Arunchal Pradesh";
document.write(stu);
//add--push()--end unshifit90--start
stu.push("Bihar");
document.write(stu);


stu.unshift("delhi");
document.write(stu);

//removing elements --pop()  --last,shift()--first,
stu.pop();
document.write(stu);
