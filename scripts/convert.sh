# Move to library
cd src/lib

# Update file extensions from .js to .jsx 
mv index.js index.jsx
cd icons
for foo in *.js; do mv $foo `basename $foo .js`.jsx; done

# Remove prop-types 
sed -i '/PropTypes/d' *
sed -i '/propTypes/d' *
sed -i '/};/d' *
sed -i '/^\s*$/d' *

# Adds size formatting
sed -i "s/'react';/'react';\nimport formatSize from '..\/size';/" *
sed -i 's/return (/const formattedSize = formatSize(size);\n    return (/' *
sed -i 's/{size}/{formattedSize}/g' *

# Add prefix in exports
cd ..
sed -i 's/as /as Fi/g' index.jsx
sed -i 's/const /const Fi/g' index.d.ts