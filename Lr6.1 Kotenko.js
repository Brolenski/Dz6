function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Hare", "Krishna", "Hare", "Krishna", ":-O",
  "1"
];

let uniqueValues = unique(values);
alert(uniqueValues);