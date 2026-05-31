const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.{ts,tsx}');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove unused React imports
  content = content.replace(/import React(, \{[^}]+\})? from 'react';\n/g, (match, p1) => {
    if (p1) return `import ${p1.substring(2)} from 'react';\n`;
    return '';
  });
  
  // Fix type imports for framer-motion
  content = content.replace(/import \{ motion, HTMLMotionProps \} from 'framer-motion';/g, 
    "import { motion } from 'framer-motion';\nimport type { HTMLMotionProps } from 'framer-motion';");

  // Fix unused setIsUnlocked
  content = content.replace(/const \[isUnlocked, setIsUnlocked\] = useState\(false\);/, 'const [isUnlocked] = useState(false);');

  // Fix unused motion in SocialProof
  if(file.includes('SocialProof')) {
    content = content.replace(/import \{ motion \} from 'framer-motion';\n/, '');
  }

  // Fix children rendering in Button.tsx
  if(file.includes('Button.tsx')) {
    content = content.replace(/\{children\}/g, '{children as React.ReactNode}');
    if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;
    }
  }

  fs.writeFileSync(file, content);
});
console.log('Fixed TS errors');
