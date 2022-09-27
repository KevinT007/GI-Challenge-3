const height = [9, 10];
const mass = [10, 45];
let BMI1 = mass[0] / (height[0] * height[1]);
let BMI2 = mass[1] / (height[0] * height[1]);
if (BMI1 > BMI2) {
  console.log("Is Tom’s BMI higher than Jerry’s?" + true);
} else {
  console.log("Is Tom’s BMI higher than Jerry’s? " + false);
}
