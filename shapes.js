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
    const input3 = document.getElementById("triangleInput3");
    const value3 = input3.value;
    const input4 = document.getElementById("triangleInput4");
    const value4 = input4.value;

    const area = triangleArea(value3, value4);
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