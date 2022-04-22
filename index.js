


const employee= {
    name : 'Sam',
    streetAddress : '11 Broadway'
}
console.log(employee.name, employee.streetAddress)


function updateEmployeeWithKeyAndValue(employee, key, value){
    const copyEmployee0 = {...employee}
    copyEmployee0[key] = value
    return copyEmployee0
}

console.log(employee);
updateEmployeeWithKeyAndValue(copyEmployee0, 'streetAddress' , '11 Broadway' );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
console.log(employee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee0 = {...employee}
    delete copyEmployee0[key]
    return copyEmployee0
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}