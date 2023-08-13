// Design a prototype for employee which takes id and name during construction of object and has a salary property.

var Employee = function (id, name) {
   if (!id || !name) throw new Error('Employee Id and name are mandatory');
   this.id = id;
   this.name = name;
};
Employee.prototype.setSalary = function (salary) {
   this.salary = salary;
};
Employee.prototype.getSalary = function () {
   return this.salary;
};

var Manager = function (params) {
   Employee.apply(this, arguments);
};

Manager.prototype = Object.create(Employee.prototype); // to clone all the functions of Employee
Manager.prototype.constructor = Manager; // to have its own constructor

Manager.prototype.setDepartment = function (name) {
   this.dept = name;
};
Manager.prototype.getDepartment = function () {
   return this.dept;
};

const rohan = new Employee(1, 'Rohan');
rohan.setSalary(3000000);
console.log(rohan);
const palani = new Manager(2, 'Palani');
palani.setDepartment('Hi Tech');
palani.setSalary(4000000);
console.log(palani);
