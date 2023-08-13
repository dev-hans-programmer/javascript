// Design a class for employee which takes id and name during construction of object and has a salary property.

class Employee {
   constructor(id, name) {
      this.id = id;
      this.name = name;
   }

   getId() {
      return this.id;
   }
   setId(id) {
      this.id = id;
   }
   getName() {
      return this.name;
   }
   setName(name) {
      this.name = name;
   }
   setSalary(salary) {
      this.salary = salary;
   }
   getSalary() {
      return this.salary;
   }
}

const hasan = new Employee(1, 'Hasan');
console.log(hasan.getName());
hasan.setSalary(1000000);
console.log(hasan);

// Design another class Manager which is an employee and having a department property
class Manager extends Employee {
   setDepartment(dept) {
      this.dept = dept;
   }
   getDepartment() {
      return this.dept;
   }
}

const palani = new Manager(2, 'Palani');
palani.setDepartment('Hi tech');
palani.setSalary(3000000);
console.log(palani);
