const fs = require('fs');
const path = require('path');

const folderPath = './swfs';
const outputFile = './games.json';

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;
  const swfs = files.filter(file => path.extname(file) === '.swf');
  fs.writeFileSync(outputFile, JSON.stringify(swfs, null, 2));
  console.log(`Generated ${outputFile} with ${swfs.length} SWFs`);
});
