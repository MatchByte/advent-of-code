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
      // this condition runs if sequence is increasing
    }
    if (matches.isDecreasing) {
      // this condition runs if the sequence is decreasing
    }
    if (matches.unsafe) {
      // this sequence will run if two integers are the same in an adjacent sequence [4,4]
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
