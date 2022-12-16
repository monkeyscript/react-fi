# Move to library
cd src/lib

# Update file extensions from .js to .jsx 
rm index.d.ts
mv index.js index.jsx
cd icons
for foo in *.js; do mv $foo `basename $foo .js`.jsx; done

# Remove prop-types 
sed -i '/PropTypes/d' *
sed -i '/propTypes/d' *
sed -i '/};/d' *
sed -i '/^\s*$/d' *

# Add prefix in exports
cd ..
sed -i 's/as /as Fi/g' index.jsx