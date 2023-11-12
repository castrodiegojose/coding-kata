function solution(str) {
  if (str === "") return [];
  const arr = str.split("");
  const resp = [];
  if (arr.length % 2 !== 0) {
    arr.push("_");
  }
  for (let i = 0; i <= arr.length; i += 2) {
    if (arr[i + 1] !== undefined) {
      resp.push(`${arr[i]}${arr[i + 1]}`);
    }
  }
  return resp;
}
