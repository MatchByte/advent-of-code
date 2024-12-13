async function _partOne() {
  const input = await Deno.readTextFile('./input.txt');
  const _lines = input
    .trim()
    .split('\n')
    .map((line) => [...line.split(/\s+/).map(Number)]);
}
