#!/bin/bash

SRC="src"
SRC_COPY=".src_copy"

cp -r $SRC $SRC_COPY

npm run __build

rm -rf $SRC
mv $SRC_COPY $SRC

