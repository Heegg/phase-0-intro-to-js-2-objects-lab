// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
        const newObject = {...Object}
        delete newObject[key]
        return newObject;
    }

// #4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}
