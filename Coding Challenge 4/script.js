var mark = {
	name: 'Mark',
  mass: 80,
  height: 1.9,
  calcBmi: function() {
  	this.bmi = this.mass / Math.pow(this.height, 2);
  }
};
var john = {
	name: 'John',
  mass: 60,
  height: 1.75,
  calcBmi: function() {
  	this.bmi = this.mass / Math.pow(this.height, 2);
    }
};
mark.calcBmi();
john.calcBmi();
if (mark.bmi > john.bmi) {
	console.log(mark.name + " have highest BMI " + mark.bmi + " then " +  john.name + " BMI " + john.bmi)
}
else if (mark.bmi < john.bmi) {
	console.log(john.name + " have highest BMI " + john.bmi + " then " +  mark.name + " BMI " + john.bmi)
}
else {
	console.log(mark.name + " have same BMI like " + john.name);
}