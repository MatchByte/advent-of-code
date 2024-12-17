// deno-lint-ignore-file
async function partOne() {
  const input = await Deno.readTextFile('./input.txt');
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim().split(/\s+/));
  const lineOne = lines[0];
  const incr = checkSequence(lineOne);
  console.log(incr);
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
      }
      return accumulator;
    },
    { isIncreasing: true, isDecreasing: true }
  );
}

await partOne();
