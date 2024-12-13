// deno-lint-ignore-file
async function partOne() {
  const input = await Deno.readTextFile('./input.txt');
  const lines = input.trim().split('\n').map((line => line.trim().split(/\s+/)));
  console.log({lines});
  let testArray = [7, 6, 4, 2, 1];
  let pairs = getArrayPairs(testArray);

}

await partOne();

function getArrayPairs(array) {
  return array.reduce((pairs, currentValue, i) => {
    if (i < array.length - 1) {
      pairs.push([currentValue, array[i + 1]]);
    }
    return pairs;
  }, []);
}
