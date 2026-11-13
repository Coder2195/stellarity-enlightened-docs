git clone https://github.com/Coder2195/stellarity-enlightened stellarity
mkdir -p pages/public/mod-data/
cp stellarity/src/main/generated/* pages/public/mod-data -r
cp stellarity/src/main/resources/* pages/public/mod-data -r
rm -rf stellarity