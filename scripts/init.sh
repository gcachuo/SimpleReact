cd ../../..

mkdir -p www
mkdir -p src/components

cp src/lib/files/.htaccess .htaccess
cp src/lib/files/.gitignore .gitignore
cp src/lib/files/www/index.html www/index.html
cp src/lib/files/src/package.json src/package.json
cp src/lib/files/src/index.ts src/index.ts
cp src/lib/files/src/components/index.ts src/components/index.ts

cd src || exit

yarn && yarn build