cd ..

mkdir -p components/pages
mkdir -p interfaces
mkdir -p styles/components
mkdir -p www

cd -

cp files/template.htaccess ../../.htaccess

cp files/components/template.render.tsx ../components/render.tsx
cp files/components/template.app.tsx ../components/app.tsx
cp files/components/pages/template.Dashboard.tsx ../components/pages/Dashboard.tsx
cp files/styles/template.app.scss ../styles/app.scss

cp files/www/template.htaccess ../www/.htaccess
cp files/www/template.index.html ../www/index.html
cp files/www/template.gitignore ../www/.gitignore

cp files/template.gitignore ../.gitignore
cp files/template.htaccess ../.htaccess
cp files/template.index.ts ../index.ts

FILE=../package.json
if [ -f "$FILE" ]; then
    echo "$FILE exists"
else
    cp files/template.package.json ../package.json
    read -p "Enter the project's name:" project
    sed -i "s/###PROJECT###/$project/g" ../package.json
    read -p "Enter the BASENAME:" BASENAME
    sed -i "s/###BASENAME###/\/$BASENAME/g" ../package.json
fi

read -p "Enter the LIB:" LIB
sed -i "s/###LIB###/$LIB/g" ../package.json
sed -i "s/###LIB###/$LIB/g" ../index.ts

yarn

cd ..

ln -sfn $LIB/webpack.config.js webpack.config.js
ln -sfn $LIB/tsconfig.json tsconfig.json

yarn
yarn build

cd ../www && ln -sfn ../api ./api