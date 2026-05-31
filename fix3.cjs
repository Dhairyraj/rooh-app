const fs = require('fs');
['src/components/ui/Card.tsx', 'src/components/ui/Input.tsx', 'src/main.tsx'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('import React')) {
    fs.writeFileSync(f, "import React from 'react';\n" + content);
  }
});
