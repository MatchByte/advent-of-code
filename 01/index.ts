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
const a = await partOne();
console.log(a)


/* part two */

