cd ../../..

mkdir -p www
mkdir -p src/components
mkdir -p src/components/dashboard

cp src/lib/files/.htaccess .htaccess
cp src/lib/files/.gitignore .gitignore

cp src/lib/files/www/index.html www/index.html
cp src/lib/files/www/.htaccess www/.htaccess

cp src/lib/files/src/package.json src/package.json
cp src/lib/files/src/index.tsx src/index.tsx

cp src/lib/files/src/components/index.ts src/components/index.ts
cp src/lib/files/src/components/dashboard/index.tsx src/components/dashboard/index.tsx

cd src || exit

yarn && yarn build