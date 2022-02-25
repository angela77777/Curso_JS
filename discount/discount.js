//const originalPrice = 120;
//const discount = 18;

function calculateDiscountedPrice(price, discount) {
    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage) / 100;

    return discountedPrice;
}


/*console.log({
    originalPrice,
    discount,
    discountedPricePercentage,
    discountedPrice
});*/

