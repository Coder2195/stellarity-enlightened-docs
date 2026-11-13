git clone https://github.com/Coder2195/stellarity-enlightened stellarity
mkdir -p docs/public/mod-data/
cp stellarity/src/main/generated/* docs/public/mod-data -r
cp stellarity/src/main/resources/* docs/public/mod-data -r
rm -rf stellarity