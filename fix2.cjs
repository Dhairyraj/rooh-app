const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
}

walk('src', (err, files) => {
  files.filter(f => f.endsWith('.ts') || f.endsWith('.tsx')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/import React(, \{[^}]+\})? from 'react';\n/g, (match, p1) => {
      if (p1) return `import ${p1.substring(2)} from 'react';\n`;
      return '';
    });
    
    content = content.replace(/import \{ motion, HTMLMotionProps \} from 'framer-motion';/g, 
      "import { motion } from 'framer-motion';\nimport type { HTMLMotionProps } from 'framer-motion';");

    content = content.replace(/const \[isUnlocked, setIsUnlocked\] = useState\(false\);/, 'const [isUnlocked] = useState(false);');

    if(file.includes('SocialProof')) {
      content = content.replace(/import \{ motion \} from 'framer-motion';\n/, '');
    }

    if(file.includes('Button.tsx')) {
      content = content.replace(/\{children\}/g, '{children as React.ReactNode}');
      if (!content.includes("import React")) {
          content = "import React from 'react';\n" + content;
      }
    }

    fs.writeFileSync(file, content);
  });
  console.log('Fixed TS errors');
});
