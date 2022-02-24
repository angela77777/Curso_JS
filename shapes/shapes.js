// Square code
function squarePerimeter(side) {
   return side * 4;
}

function squareArea(side) {
    return side * side;
} 

// Triangle code
function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

// Isosceles triangle code
function isoscelesTrianglePerimeter(sides, base) {
    return (sides * 2) + base;
}

function isoscelesTriangleHeight(sides, base) {
    if(sides != base){
        console.log("triángulo isosceles");
        const height = Math.sqrt((sides ** 2) - ((base ** 2) / 4));
        return height;
    }

    else{
        alert("El lado 1 y el lado 2 no son iguales, no corresponde a un triángulo isósceles, digite nuevamente")
    }
}

function isoscelesTriangleArea(side, base) {
    const height = isoscelesTriangleHeight(side, base);
    return (base * height) / 2;
}

// Equilateral triangle code
function equilateralTrianglePerimeter(side) {
    return side * 3;
}

function equilateralTriangleHeight(side) {
    const height = (Math.sqrt(3 * side)) / 2;
    return height;
}

function equilateralTriangleArea(side) {
    const height = equilateralTriangleHeight(side);
    return (side * height) / 2;
}

// Rectangle code
function rectanglePerimeter(side1, side2) {
    return (side1 * 2) + (side2 * 2);
}

function rectangleArea(side1, side2) {
    return side1 * side2;
}

// Circle code
const PI = Math.PI;

function circleDiameter(radio) { 
    return radio * 2;
}

function circlePerimeter(radio) {
    const diameter = circleDiameter(radio); 
    return diameter * PI;
}

function circleArea(radio) {
    return (radio ** 2) * PI;
}

// HTML

function calculatePerimeterTriangle() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("triangleInput2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("triangleInput3");
    const value3 = parseInt(input3.value);

    const perimeter = trianglePerimeter(value1, value2, value3);
    alert(perimeter + " cm^2");
}

function calculateAreaTriangle() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = input1.value;
    const input2 = document.getElementById("triangleInput2");
    const value2 = input2.value;

    const area = triangleArea(value1, value2);
    alert(area + " cm^3");
} 

function calculatePerimeterIsoscelesTriangle() {
    const input1 = document.getElementById("isoscelesTriangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("isoscelesTriangleInput2");
    const value2 = parseInt(input2.value);

    const perimeter = isoscelesTrianglePerimeter(value1, value2);
    alert(perimeter + " cm^2");
}

function calculateAreaIsoscelesTriangle() {
    const input1 = document.getElementById("isoscelesTriangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("isoscelesTriangleInput2");
    const value2 = parseInt(input2.value);

    const area = isoscelesTriangleArea(value1, value2)
    alert(area + " cm^3");
}

function calculatePerimeterEquilateralTriangle() {
    const input = document.getElementById("equilateralTriangleInput");
    const value = input.value;

    const perimeter = equilateralTrianglePerimeter(value);
    alert(perimeter + " cm^2");
}

function calculateAreaEquilateralTriangle() {
    const input = document.getElementById("equilateralTriangleInput");
    const value = input.value;

    const area = equilateralTriangleArea(value);
    alert(area + " cm^3");
}

function calculatePerimeterSquare() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter + " cm^2");
}

function calculateAreaSquare() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const area = squareArea(value);
    alert(area + " cm^3");
}

function calculatePerimeterRectangle() {
    const input1 = document.getElementById("rectangleInput1");
    const value1 = input1.value;
    const input2 = document.getElementById("rectangleInput2");
    const value2 = input2.value;

    const perimeter = rectanglePerimeter(value1, value2);
    alert(perimeter + " cm^2");
}

function calculateAreaRectangle() {
    const input1 = document.getElementById("rectangleInput1");
    const value1 = input1.value;
    const input2 = document.getElementById("rectangleInput2");
    const value2 = input2.value;

    const area = rectangleArea(value1, value2);
    alert(area + " cm^3");
}

function calculatePerimeterCircle() {
    const input = document.getElementById("circleInput");
    const value = input.value;

    const perimeter = circlePerimeter(value);
    alert(perimeter + " cm^2");
}

function calculateAreaCircle() {
    const input = document.getElementById("circleInput");
    const value = input.value;

    const area = circleArea(value);
    alert(area + " cm^3");
}