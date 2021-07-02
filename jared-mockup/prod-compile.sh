rm -r prod/*
cp *.html prod/
purgecss -con index.html -css lib/bootstrap_5.01.min.css -o pro/bootstrap_5.01.css
