# Move to library
cd src/lib

# Update file extensions from .js to .jsx 
rm index.d.ts
mv index.js index.jsx
cd icons
for foo in *.js; do mv $foo `basename $foo .js`.jsx; done

# Add prefix in exports
cd ..
sed -i 's/as /as Fi/g' index.jsx