function customMap(arr, callback) {
  return arr.reduce((result, currentValue) => {
    result.push(callback(currentValue));
    return result;
  }, []);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, (num) => num * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]

function customFilter(arr, callback) {
  return arr.reduce((result, currentValue) => {
    if (callback(currentValue)) {
      result.push(currentValue);
    }
    return result;
  }, []);
}

const array = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(array, (num) => num % 2 === 0);

console.log(evenNumbers);
// Output: [2, 4]
