async function _partOne() {
  const input = await Deno.readTextFile('./input.txt');
  const _lines = input
    .trim()
    .split('\n')
    .map((line) => [...line.split(/\s+/).map(Number)]);

  for (const [indx,val] of _lines.entries()) {
    const chunks = val.slice(indx, indx + 2);
    console.log(chunks);
  }
}
await _partOne();
