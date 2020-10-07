var student = { id:121, phone:1745, name:"Abir"};
var student2 = { id:131, phone:458, name:"Mahi"};

//3 types of check property value
var phoneNum1 = student.phone;
var phoneNum2 = student["phone"];
var phoneProNo = "phone";
var phoneNum3 = student2[phoneProNo];

//3 types of update property value
student.phone = 58796;
student["phone"] = 65224;
student[phoneProNo] = 84563;

//add proparty
student2.cinema = "ogni2";

console.log(phoneNum3);
console.log(student2);