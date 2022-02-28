// Mean
function calculateMean(list) {
    const additionList = list.reduce(
        function (a = 0, b) {
            return a + b;
        });

    const mean = additionList / list.length;

    return mean;
}

// Median
function calculateMedian(list) {
    const orderedList = list.sort(
        function (a, b) {
        return a - b;
    });

    const middleList = parseInt(list.length / 2);

    function isEven(number) {
        if (number % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    let median;
    
        if (isEven(orderedList.length)) {
            const element1 = orderedList[middleList - 1];
            const element2 = orderedList[middleList];
    
            const mean = calculateMean([
                element1,
                element2,
            ]);
        median = mean;
        }
        else {
            median = orderedList[middleList];
        }
            return median;
} 

// Mode
function calculateMode(list) {
    const listCount = {};

    list.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1;
            }
            else {
                listCount[element] = 1;
            }
        });

    const arrayList = Object.entries(listCount).sort(
        function (a, b) {
            return a[1] - b[1];
        });
    
    const mode = arrayList[arrayList.length - 1];

    return mode;
}
