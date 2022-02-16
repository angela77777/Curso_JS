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
    (radio * radio) * PI;
}