#!/bin/sh
DIRNAME="apps/get-nft/assets/output"

find $DIRNAME -type f  | wc -l
find $DIRNAME -type f -name '*.json' | wc -l
find $DIRNAME -type f -name '*.png' | wc -l

