#!/bin/bash

# Assumes presence of ImageMajick

unzip -u flags-mini.zip

base=../basic_map_pin.png

for flag in *.png
do
  cc="$(tr '[:lower:]' '[:upper:]' <<< ${flag:0:1})${flag:1:1}"
  composite -compose atop -geometry +0+5 $flag $base ../${cc}-pin.png
  rm $flag
done
