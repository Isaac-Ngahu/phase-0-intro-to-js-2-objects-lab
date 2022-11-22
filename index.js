// Write your solution in this file!
const employee={
    name:"Lover",
    streetAddress:"69",
}
function updateEmployeeWithKeyAndValue(_employeeObject,key,value){
    const newObject={...employee};
    newObject[key]=value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(_employee, key){
   const newObject={...employee};
    delete newObject[key];
    return newObject;

}
function destructivelyDeleteFromEmployeeByKey(_employee,key){
    delete employee[key];
    return employee;

}