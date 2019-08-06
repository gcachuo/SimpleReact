cd ..

mkdir -p components/pages
mkdir -p interfaces
mkdir -p styles/components
mkdir -p ../www

ln -s ../api ../www/api

cp config/files/components/template.index.tsx components/index.tsx
cp config/files/components/template.app.tsx components/app.tsx
cp config/files/interfaces/template.toastr.ts interfaces/toastr.ts
cp config/files/styles/template.app.scss styles/app.scss

cp config/files/www/template.htaccess ../www/.htaccess
cp config/files/www/template.index.html ../www/index.html
cp config/files/www/template.gitignore ../www/.gitignore

cp config/files/template.gitignore .gitignore
cp config/files/template.imports.ts imports.ts
cp config/files/template.tsconfig.json tsconfig.json
cp config/files/template.webpack.config.js webpack.config.js

FILE=package.json
if [ -f "$FILE" ]; then
    echo "$FILE exists"
else
    cp config/files/template.package.json package.json
    read -p "Enter the project's name:" project
    sed -i "s/###PROJECT###/$project/g" package.json
    read -p "Enter the BASENAME:" BASENAME
    sed -i "s/###BASENAME###/\/$BASENAME/g" package.json
fi

yarn
yarn build