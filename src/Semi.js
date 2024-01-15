const fs = require('fs');
function addSemicolons(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');

      content = content.replace(/}\s*(?=\w)(?!(\s*else|\s*catch))/g, '}; ');
  
      fs.writeFileSync(filePath, content, 'utf-8');
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }
  const filePath = 'C:/Users/gosha/OneDrive/Рабочий стол/Obfuscator-main/Obfuscator-main/obfuscator/OutputCode.js';
  
  addSemicolons(filePath);