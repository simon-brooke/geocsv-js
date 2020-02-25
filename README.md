# geocsv-js

An even more ultra-lightweight tool to show comma-separated value data on a map.

## Overview

This is a third iteration of GeoCSV. The [original](https://github.com/simon-brooke/geocsv) was written quickly in Clojure and ClojureScript, with CSV parsing done server side and React (via [re-frame](https://github.com/day8/re-frame)) driving the client side. That's my comfort zone; but it had the benefit that my customer wanted to pull data from Google Sheets, which you can't do from client side (or at least I don't know how to) because of cross-site scripting protections.

But it's also ludicroously heavyweight for what seemed such a simple requirement. The second iteration, [geocsv-lite](https://simon-brooke.github.io/geocsv-lite/), was written in ClojureScript without heavyweight libraries, and is client-side only. It works, as you can see; but it still results in a much heavier page than I think is justified.

So this project is well out of my comfort zone: it's an attempt to build as lightweight as possible in raw JavaScript, without frameworks or big libraries. Of course, this version also cannot pull data from remote sites because of cross-site scripting rules, and I haven't found a workaround for that.

However, if all you want to do is pull data from the same server you're serving the page from, this will work for you.

The CSV file must have

* column names in the first row;
* data in all other rows;
* a column whose name is `name`, which always contains data;
* a column whose name is `latitude`, whose value is always a number between -90.0 and 90.0;
* a column whose name is `longitude`, whose value is always a number between -180.0 and 180.90

Additionally, the value of the column `category`, if present, will be used to select map pins from the map pins folder, if a suitable pin is present. Thus is the value of `category` is `foo`, a map pin image with the name `Foo-pin.png` will be selected.

Note that, unlike in **geocsv**, *THERE IS NO DEFAULT PIN*, as there is no server side intelligence so we cannot query the server for pin names. So a default pin will be shown only if either

1. There is no `category` column, or
2. If the `category` column is empty

## License

Copyright © 2020 Simon Brooke

Licensed under the GNU General Public License, version 2.0 or (at your option) any later version.
