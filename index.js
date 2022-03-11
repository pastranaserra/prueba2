const colors = require('colors');
const fs = require('fs');

const fileName = 'data.json';
const filePath = `data/${fileName}`;

const hola = 'Hola'.bold.white;
const mundo = 'Mundo'.dim.gray;

let lines;
try {
  const content = fs.readFileSync(filePath, 'utf-8');
  lines = JSON.parse(content);
} catch (error) {
  lines = [];
}

lines.push(`${hola} ${mundo}`);

fs.writeFileSync(filePath, JSON.stringify(lines));

lines.forEach((line) => {
  console.log(line);
});
