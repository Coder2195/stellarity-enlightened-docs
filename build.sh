git clone https://github.com/Coder2195/stellarity-enlightened stellarity
rm -rf docs/public/mod-data/
mkdir -p docs/public/mod-data/
cp stellarity/src/main/generated/* docs/public/mod-data -r
cp stellarity/src/main/resources/* docs/public/mod-data -r
rm -rf stellarity
cp assets.zip docs/public/mod-data/assets.zip
cd docs/public/mod-data/assets
zip ../assets.zip stellarity/blockstates stellarity/items stellarity/models stellarity/textures/item stellarity/textures/block -r -x stellarity/textures/**/*.json