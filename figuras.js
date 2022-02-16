// Square code
console.group("Square");

const squareSide = 5;
console.log("Each side of the square is equal to: " + squareSide + " cm");

const squarePerimeter = squareSide * 4;
console.log("The perimeter of the square is equal to: " + squarePerimeter + " cm");

const squareArea = squareSide * squareSide;
console.log("The area of the square is equal to: " + squareArea + " cm^2");

console.groupEnd();

// Triangle code
console.group("Triangle");

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
console.log("The sides of the triangle are equal to: " + triangleSide1 + " cm, " + triangleSide2 + " cm and " + triangleBase + " cm");

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("The perimeter of the triangle is equal to: " + trianglePerimeter + " cm");


const triangleHeight = 5.5;
console.log("The height of the triangle is equal to: " + triangleHeight + " cm");


const triangleArea = (triangleBase * triangleHeight) / 2;
console.log("The area of the triangle is equal to: " + triangleArea + " cm^2");

console.groupEnd();

// Triangle code
console.group("Circle");

const circleRadio = 4;
console.log("The radio of the circle is equal to: " + circleRadio);

const circleDiameter = circleRadio * 2;
console.log("The diameter of the circle is equal to: " + circleDiameter);

const PI = Math.PI;

const circlePerimeter = circleDiameter * PI;
console.log("The perimeter of the circle is equal to: " + circlePerimeter + " cm");

const circleArea = (circleRadio * circleRadio) * PI;
console.log("The area of the circle is equal to: " + circleArea + " cm^2");

console.groupEnd();