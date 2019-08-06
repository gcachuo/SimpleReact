cd ..

mkdir -p components/pages
mkdir -p interfaces
mkdir -p styles/components
mkdir -p ../www

ln -s ../api ../www/api

cp config/files/components/index.tsx.template components/index.tsx
cp config/files/components/app.tsx.template components/app.tsx
cp config/files/interfaces/toastr.ts.template interfaces/toastr.ts
cp config/files/styles/app.scss.template styles/app.scss

cp config/files/www/.htaccess.template ../www/.htaccess
cp config/files/www/index.html.template ../www/index.html
cp config/files/www/.gitignore.template ../www/.gitignore

cp config/files/.gitignore.template .gitignore
cp config/files/imports.ts.template imports.ts
cp config/files/tsconfig.json.template tsconfig.json
cp config/files/webpack.config.js.template webpack.config.js

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
yarn build