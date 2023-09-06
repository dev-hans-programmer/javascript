class Bank {
   constructor(roi, name, branch) {
      this.roi = roi;
      this._name = name; // Declare #name as a private field
      this.branch = branch;
   }

   // Getter for #name
   getName() {
      return this._name;
   }
}

const bob = new Bank(10, 'BOB', 'RPH');
console.log(bob.getName()); // Access #name using the getter method
