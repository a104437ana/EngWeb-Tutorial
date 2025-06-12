set -x
cd "$1" || exit
cp ~/EngWeb-Tutorial/Base/.gitignore .
cp ~/EngWeb-Tutorial/Base/PR.md .
mkdir ex1
cd ex1
cp ~/EngWeb-Tutorial/Base/dataset.py .
cp ~/EngWeb-Tutorial/Base/queries.txt .
npx express-generator --view=pug API_de_dados
cd API_de_dados
npm i
npm i mongoose --save
rm routes/users.js
rm routes/index.js
cp  ~/EngWeb-Tutorial/Base/ex1/routes/blas.js routes
rm app.js
cp ~/EngWeb-Tutorial/Base/ex1/app.js .
mkdir models
cp ~/EngWeb-Tutorial/Base/ex1/models/bla.js models
mkdir controllers
cp ~/EngWeb-Tutorial/Base/ex1/controllers/blas.js controllers
cd ..
cd ..
mkdir ex2
cd ex2
npx express-generator --view=pug Front-end
cd Front-end
npm i
npm i axios --save
rm routes/users.js
rm routes/index.js
cp ~/EngWeb-Tutorial/Base/ex2/index.js routes
rm public/stylesheets/style.css
cp ~/EngWeb-Tutorial/Base/style.css public/stylesheets
rm views/layout.pug
cp ~/EngWeb-Tutorial/Base/layout.pug views
rm views/error.pug
cp ~/EngWeb-Tutorial/Base/error.pug views
cp ~/EngWeb-Tutorial/Base/ent.pug views
cp ~/EngWeb-Tutorial/Base/lista.pug views
rm app.js
cp ~/EngWeb-Tutorial/Base/ex2/app.js .