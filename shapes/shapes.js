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
        const height = Math.sqrt(((sides * sides) - (base * base)) / 4);
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
    const height = Math.sqrt((3 * side)) / 2;
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
    return (radio * radio) * PI;
}

// HTML

function calculatePerimeterTriangle() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("triangleInput2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("triangleInput3");
    const value3 = parseInt(input3.value);
    const result = document.getElementById("resultTriangle");

    const perimeter = trianglePerimeter(value1, value2, value3);
    
    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaTriangle() {
    const input3 = document.getElementById("triangleInput3");
    const value3 = input3.value;
    const input4 = document.getElementById("triangleInput4");
    const value4 = input4.value;
    const result = document.getElementById("resultTriangle");

    const area = triangleArea(value3, value4);
    
    result.innerText = "El área es igual a " + area + " cm^3";
} 

function calculatePerimeterIsoscelesTriangle() {
    const input1 = document.getElementById("isoscelesTriangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("isoscelesTriangleInput2");
    const value2 = parseInt(input2.value);
    const result = document.getElementById("resultIsoscelesTriangle");

    const perimeter = isoscelesTrianglePerimeter(value1, value2);

    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaIsoscelesTriangle() {
    const input1 = document.getElementById("isoscelesTriangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("isoscelesTriangleInput2");
    const value2 = parseInt(input2.value);
    const result = document.getElementById("resultIsoscelesTriangle");

    const area = isoscelesTriangleArea(value1, value2)
    
    result.innerText = "El área es igual a " + area + " cm^3";
}

function calculatePerimeterEquilateralTriangle() {
    const input = document.getElementById("equilateralTriangleInput");
    const value = input.value;
    const result = document.getElementById("resultEquiateralTriangle");

    const perimeter = equilateralTrianglePerimeter(value);
    
    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaEquilateralTriangle() {
    const input = document.getElementById("equilateralTriangleInput");
    const value = input.value;
    const result = document.getElementById("resultEquiateralTriangle");

    const area = equilateralTriangleArea(value);
    
    result.innerText = "El área es igual a " + area + " cm^3";
}

function calculatePerimeterSquare() {
    const input = document.getElementById("squareInput");
    const value = input.value; 
    const result = document.getElementById("resultSquare");

    const perimeter = squarePerimeter(value);
    
    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaSquare() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const result = document.getElementById("resultSquare");

    const area = squareArea(value);
    
    result.innerText = "El área es igual a " + area + " cm^3";
}

function calculatePerimeterRectangle() {
    const input1 = document.getElementById("rectangleInput1");
    const value1 = input1.value;
    const input2 = document.getElementById("rectangleInput2");
    const value2 = input2.value; 
    const result = document.getElementById("resultRectangle");

    const perimeter = rectanglePerimeter(value1, value2);
    
    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaRectangle() {
    const input1 = document.getElementById("rectangleInput1");
    const value1 = input1.value;
    const input2 = document.getElementById("rectangleInput2");
    const value2 = input2.value;
    const result = document.getElementById("resultRectangle");

    const area = rectangleArea(value1, value2);
    
    result.innerText = "El área es igual a " + area + " cm^3";
}

function calculatePerimeterCircle() {
    const input = document.getElementById("circleInput");
    const value = input.value;
    const result = document.getElementById("resultCircle");

    const perimeter = circlePerimeter(value);
    
    result.innerText = "El perímetro es igual a " + perimeter + " cm^2";
}

function calculateAreaCircle() {
    const input = document.getElementById("circleInput");
    const value = input.value;
    const result = document.getElementById("resultCircle");

    const area = circleArea(value);
    
    result.innerText = "El área es igual a " + area + " cm^3";
}