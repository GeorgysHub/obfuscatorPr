const fs = require('fs');

function removeCommentsFromFile(filePath) {

  let content = fs.readFileSync(filePath, 'utf-8');   

  content = content.replace(/\/\/.*?(\r\n|\n|$)/g, '');   
  content = content.replace(/\/\*[\s\S]*?\*\//g, ''); 

  fs.writeFileSync(filePathOutput, content, 'utf-8'); 

}

const filePath = 'C:/Users/gosha/OneDrive/Рабочий стол/Obfuscator-main/Obfuscator-main/obfuscator/OutputCode.js';
const filePathOutput = 'C:/Users/gosha/OneDrive/Рабочий стол/Obfuscator-main/Obfuscator-main/obfuscator/OutputCode.js';

removeCommentsFromFile(filePath);