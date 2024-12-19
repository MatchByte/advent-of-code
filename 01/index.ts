// deno-lint-ignore-file
async function partOne() {
  const data = await Deno.readTextFile('./part_one.txt');
  const lines = data.split('\n');
  let col1: number[] = [];
  let col2: number[] = [];
  lines.forEach((line) => {
    const nums = line.trim().split(/\s+/).map(Number);
    col1.push(nums[0]);
    col2.push(nums[1]);
  });

  const sortedColumnOne = [...col1].sort((a, b) => a - b);
  const sortedColumnTwo = [...col2].sort((a, b) => a - b);
  return sortedColumnTwo
    .map((element, index) => {
      return Math.abs(sortedColumnOne[index] - element);
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
}
// const a = await partOne();


/* part two */

async function partTwo() {
  const data = await Deno.readTextFile('./part_one.txt');
  const lines = data.split('\n');
  let col1: number[] = [];
  let col2: number[] = [];
  lines.forEach((line) => {
    const nums = line.trim().split(/\s+/).map(Number);
    col1.push(nums[0]);
    col2.push(nums[1]);
  });
  let sortedColumnOnePartTwo = [...col1];

  let tot = 0;
  for (const [, value] of sortedColumnOnePartTwo.entries()) {
    // look for count of value in column two
    let targetCount = findNumCount(col2, value);
    let total = targetCount.length * value;
    tot += total;
  }

}
await partTwo();

function findNumCount(array: number[], target: number) {
  return array.filter((x) => x === target);
}
