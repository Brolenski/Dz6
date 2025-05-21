function countOccurrences(arr) {
  const map = new Map();

  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log("Результат:");
for (const [key, value] of result.entries()) {
  console.log(`${key} => ${value}`);
}