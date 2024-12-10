async function _partOne() {
  const input = await Deno.readTextFile('./input.txt');
  const _lines = input.trim().split('\n');
  console.log(_lines);
  
}
await _partOne()