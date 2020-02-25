#!/usr/bin/awk -f

BEGIN {
  FS=",";
  print( "#!/bin/bash");
  print( "# Automatically generated bash script to generate all the named colours.");
}
{
  gsub( / /, "-", $1);
  printf( "cat Blank-pin.svg | sed  's/fill:#dddddc;/fill:%s;/' > \"%s-pin.svg\"\n", tolower($2), $1);
  printf( "inkscape %s-pin.svg --export-png=X11-%s-pin.png\n", $1, tolower($1));
}
