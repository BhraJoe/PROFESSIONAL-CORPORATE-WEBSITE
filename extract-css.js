const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
     const files = fs.readdirSync(dirPath);
     arrayOfFiles = arrayOfFiles || [];
     files.forEach(function (file) {
          const fullPath = path.join(dirPath, file);
          if (fs.statSync(fullPath).isDirectory()) {
               arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
          } else {
               if (fullPath.endsWith('.tsx')) {
                    arrayOfFiles.push(fullPath);
               }
          }
     });
     return arrayOfFiles;
}

const files = getAllFiles('./src/app');
let allCss = '';

files.forEach(file => {
     let content = fs.readFileSync(file, 'utf8');
     const regex = /<style jsx>\{`([\s\S]*?)`\}<\/style>/g;
     let match;
     let newContent = content;
     while ((match = regex.exec(content)) !== null) {
          allCss += `\n/* Styles extracted from ${file} */\n` + match[1];
          newContent = newContent.replace(match[0], '');
     }
     // also handle potential <style jsx>{`...`} </style> variations if any
     if (newContent !== content) {
          fs.writeFileSync(file, newContent, 'utf8');
          console.log(`Extracted CSS from ${file}`);
     }
});

if (allCss) {
     fs.appendFileSync('./src/app/globals.css', allCss, 'utf8');
     console.log('Appended all CSS to globals.css');
}
