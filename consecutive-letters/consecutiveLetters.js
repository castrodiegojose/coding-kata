function longestRepetition(s) {
  if (s === "") return ["", 0];
  const arr = s.toLowerCase().split("");
  let max = 0;
  let count = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined && arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
      result = [arr[i], max];
    }
  }

  return result;
}
