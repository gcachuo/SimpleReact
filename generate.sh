cd ..
cp config/template.package.json package.json
read -p "Enter the project's name:" project
sed -i "s/###PROJECT###/$project/g" package.json
read -p "Enter the BASENAME:" BASENAME
sed -i "s/###BASENAME###/\/$BASENAME/g" package.json