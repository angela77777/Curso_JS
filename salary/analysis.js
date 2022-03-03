// Helpers
function isEven(number) {
    return (number % 2 == 0);
}

function calculateMean(list) {
    const additionList = list.reduce(
        function (a = 0, b) {
            return a + b;
        });

    const mean = additionList / list.length;

    return mean;
}

// Median's Calculator
function salariesMedian(list) {
    const middleList = parseInt(list.length / 2);

    if (isEven(list.length)) {
        const middlePerson1 = list[middleList - 1];
        const middlePerson2 = list[middleList];

        const median = calculateMean([middlePerson1, middlePerson2]);
        return median;
    }
    else {
        const middlePerson = list[middleList];
        return middlePerson;
    }
}

// Total Median
const salariesCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (a, b) {
        return a - b;
    }
);

const totalMedianCol = salariesMedian(salariesColSorted);

// Top 10% Calculator
const sliceStart = parseInt(salariesColSorted.length * .9);
const sliceCount = parseInt(salariesColSorted.length - sliceStart);
const salariesColTop10 = salariesColSorted.splice(sliceStart, sliceCount);
const top10MedianTop10 = salariesMedian(salariesColTop10);

console.log(totalMedianCol, top10MedianTop10);