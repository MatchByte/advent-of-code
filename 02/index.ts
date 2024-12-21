// deno-lint-ignore-file
async function partOne() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/));
  lines.forEach((line, index) => {
    let matches = checkSequence(line);
    if (matches.isIncreasing) {
      console.log(line);
    }
    if (matches.isDecreasing) {
      console.log(line);
    }
    if (matches.unsafe) {
      console.log(line);
    }
  });
}

function checkSequence(array) {
  return array.reduce(
    (accumulator, currentValue, index, arr) => {
      if (index < arr.length - 1) {
        if (currentValue > arr[index + 1]) {
          accumulator.isIncreasing = false;
        }
        if (currentValue < arr[index + 1]) {
          accumulator.isDecreasing = false;
        }
        if (currentValue === arr[index + 1]) {
          accumulator.isDecreasing = false;
          accumulator.isIncreasing = false;
          accumulator.unsafe = true;
        }
      }
      return accumulator;
    },
    { isIncreasing: true, isDecreasing: true, unsafe: false },
  );
}

await partOne();
