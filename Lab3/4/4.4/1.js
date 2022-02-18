// 1
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
 }
  
(user.go)()

// 2
f = obj.go; 
f(); 

// 3
function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
};
  
let user = makeUser();
  
alert( user.ref.name );

// 4
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 5
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
}
  
ladder.up().up().down().up().down().showStep();