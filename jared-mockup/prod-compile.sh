rm -r prod/
mkdir prod
mkdir prod/lib
cp *.html prod/
cp *.js prod/
cp *.css prod/
cp lib/*.js prod/lib/
purgecss -con index.html -css lib/bootstrap_5.01.min.css -o prod/lib/bootstrap_5.01.min.css
