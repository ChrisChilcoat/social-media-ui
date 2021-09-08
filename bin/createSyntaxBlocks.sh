#!/bin/bash
# Remove old code blocks from public/tmp and create fresh ones.

rm -rf public/tmp/*.txt 

for i in src/components/facebook/*.js; do 
cp "$i" "public/tmp/$(basename $i:r.txt)"; 
done

echo "Created new code blocks for SyntaxHighlighter."