function addNumbers(num1, num2) {
    if (num1 > num2) {
        return "problem"
    }
    return num1 + num2
}


const res1 = addNumbers(1, 5);
const res2 = addNumbers(1, 10);

console.log(res1);
console.log(res2);

const res3 = addNumbers(res2, res1)

console.log(res3);