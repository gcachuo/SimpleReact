cd ..

cp config/files/template.package.json package.json
cp config/files/template.gitignore .gitignore

read -p "Enter the project's name:" project
sed -i "s/###PROJECT###/$project/g" package.json
read -p "Enter the BASENAME:" BASENAME
sed -i "s/###BASENAME###/\/$BASENAME/g" package.json

yarn