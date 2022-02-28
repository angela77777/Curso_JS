class Coupon {
    constructor(value, expirationDate) {
        this.value = value;
        this.expirationDate = expirationDate;
    }
}

const coupons = new Map([
    ['Básico', new Coupon(15, new Date(2022, 01, 28))],
    ['Recomendado', new Coupon(30, new Date(2022, 01, 26))],
    ['Premium', new Coupon(50, new Date(2022, 01, 27))]    
])

function onClickCalculateDiscountedPrice1() {
    const input1 = document.getElementById("inputPrice");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputCoupon");
    const value2 = input2.value;
    const result1 = document.getElementById("result1");
    let date = new Date();

    if (coupons.has(value2)) {
        if (date.setHours(0, 0, 0, 0) <= new Date(coupons.get(value2).expirationDate)) {
            const discountedPrice = calculateDiscountedPrice(value1, coupons.get(value2).value);

            result1.innerText = "El precio con descuento que debes pagar por tu producto es de $" + discountedPrice;
        }
        else {
            result1.innerText = "El cupón " + value2 + " está expirado";
      }  
    }
    else {
        result1.innerText = "El cupón " + value2 + " no es válido";
    }
}

function calculateDiscountedPrice(price, discount) {
    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage) / 100;
    return discountedPrice;
}

function onClickCalculateDiscountedPrice() {
    const input1 = document.getElementById("input1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("input2");
    const value2 = parseInt(input2.value);

    const discountedPrice = calculateDiscountedPrice(value1, value2);

    const result = document.getElementById("result");
    result.innerText = "El precio con descuento que debes pagar por tu producto es de $" + discountedPrice;
}

