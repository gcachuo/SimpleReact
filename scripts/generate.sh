cd ..

cp config/files/.gitignore.template .gitignore
cp config/files/imports.ts.template imports.ts
cp config/files/tsconfig.json.template tsconfig.json

FILE=package.json
if [ -f "$FILE" ]; then
    echo "$FILE exists"
else
    cp config/files/package.json.template package.json
    read -p "Enter the project's name:" project
    sed -i "s/###PROJECT###/$project/g" package.json
    read -p "Enter the BASENAME:" BASENAME
    sed -i "s/###BASENAME###/\/$BASENAME/g" package.json
fi

yarn