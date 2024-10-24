// const data = 'javascript ios used for this one';

// await Bun.write ('output.txt', data)


const file = await Bun.file ('file.text');
console.log(await file.text());
console.log(file.size);
console.log(await file.stream())
console.log(await file.arrayBuffer())