function stringChop(str, size) {
  if (str === null) return [];

  const result = [];
  const len = str.length;

  for (let i = 0; i < len; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
