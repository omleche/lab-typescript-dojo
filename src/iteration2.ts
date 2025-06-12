//
// Iteration 2 | Functions



function calcMultipication( a:number, b:number ) {
    return a * b;
}

const result1 = calcMultipication(2,2);
console.log(result1);

const result2 = calcMultipication (0,1);
console.log(result2);

// Iteration 2.2

function isEven( n:number ): boolean {
    return n % 2 === 0;
}

const result3 = isEven (4);
console.log(result3);

const result4 = isEven(3);
console.log(result4);


// 2.3 - Implement the function calcArrayAverage()
// Name of the function: calcArrayAverage
// Parameters:
// numbersArr (an array of numbers)
// Return value: should return a string or a number,
// if the array is empty, return the message Please provide an array with at least one element.
// if the array is not empty, return the average (i.e., the result of adding all the numbers and dividing by the number of elements in the array)
//To calculate the sum of all numbers in the array, you can use the method reduce(). Then, divide the sum by the number of elements in the array and return the result.

function calcArrayAverage( numbersArr: number[]) : string | number {
    if (numbersArr.length === 0) {
        return 'Please provide an array with at least one element'
    }

    const sum = numbersArr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    const average = sum / numbersArr.length;
    
    return average;
}

const result5 = calcArrayAverage([]);
console.log(result5);

const result6 = calcArrayAverage([5,5,6,4]);
console.log(result6);