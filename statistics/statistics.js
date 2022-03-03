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
        return (number % 2 == 0);
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
    const modeList = [];

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
    
    
    let i = 0;
    let index = 0;
    do {
        i++;
        index = arrayList.length - i;
        modeList.push(arrayList[index][0]);
    } while (index > 0 && arrayList[index][1] === arrayList[index - 1][1]);
    
    modeList.reverse();

    let stringMode = "";

    for (let k = 0; k < modeList.length; k++) {
        stringMode += modeList[k];
        stringMode += k < modeList.length - 2 ? ", " : k < modeList.length - 1 ? " y " : "";
    }

    return stringMode;
}

// HTML
function onClickCalculateMean() {
    const input = document.getElementById("input");
    const result = document.getElementById("result");

    let arrayValue = Array.from(input.value.trim().split(","), Number);
    
    const mean = calculateMean(arrayValue);

    result.innerText = "El promedio de los datos es igual a " + mean;
}

function onClickCalculateMedian() {
    const input = document.getElementById("input");
    const result = document.getElementById("result");
    
    let arrayValue = Array.from(input.value.trim().split(","), Number);

    const median = calculateMedian(arrayValue);

    result.innerText = "La mediana de los datos es igual a " + median;
}

function onClickCalculateMode() {
    const input = document.getElementById("input");
    const result = document.getElementById("result");

    let arrayValue = Array.from(input.value.trim().split(","), Number);

    const mode = calculateMode(arrayValue);

    result.innerText = "La moda de los datos es " + mode;
}

/* function calcularModa() {
    const input = document.getElementById("input");
    const value = parseInt(input.value);
  
    let arrayValue = Array.from(value.split(","), Number);
  
    const listCounter = {};
  
    arrayValue.map(function (element) {
      if (listCounter[element]) {
        listCounter[element] += 1;
      } else {
        listCounter[element] = 1;
      }
    });
  
    const arrayList = Object.entries(listCounter).sort(function (a, b) {
      return a[1] - b[1];
    });
  
    const mode = arrayList[arrayList.length - 1];
    
    const result = document.getElementById("result");
    
    result.innerText = "La moda de los datos es " + mode;
  } */
  