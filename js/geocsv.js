/**
 * OK, right out of my comfort zone; rewrite geocsv-lite in pure JavaScript.
 *
 * Presuposes the availability of Leaflet as L, and of PapaParse as Papa.
 */

var GeoCSV = {
  /**
   * Methods for disentangling data.
   */
  Data: {
    /**
     * Prepare a single record (Object) from the keys `ks` and values `vs`.
     */
    prepareRecord( ks, vs) {
      var record = new Object();

      for ( i = 0; i < Math.min( ks.length, vs.length); i += 1) {
        if ( ks[ i]) {
          record[ ks[ i]] = vs[ i];
        }
      }

      return record;
    },

    /**
     * Prepare an array record objects from this `data`, assumed to be data
     * as parsed by [PapaParse](https://www.papaparse.com/) from a CSV file
     * with column headers in the first row.
     */
    prepareRecords( data) {
      var cols = data[0].map( c => {
        return c.trim().toLowerCase().replace( /[^\w\d]+/, "-");
      });

      console.log( "data[0]: " + data[0] + "; cols: " + cols);

      var rest = data.slice( 1);

      // I should be able to do this with a forEach over data.slice( 1), but
      // I've failed to make it work.

      var result = [];

      for ( j = 1; j < rest.length; j++) {
        result[ j] = this.prepareRecord( cols, rest[j]);
      }

      return result;
    },

    /**
     * Parse this `dataSource` and return it as record objects.
     * Doesn't yet work for URLs.
     */
    getData( dataSource) {
      var p = Papa.parse( dataSource);
      var data = p.data;

      if ( p.errors.length > 0) {
        try {
          data = JSON.parse( dataSource);
        }
        catch( anything) {
          data = null;
        }
      }

      if ( data instanceof Array) {
        return this.prepareRecords( data);
      } else {
        // this is where I should handle URLs.
        return null;
      }
    }
  },

  /**
   * Methods related to locating and presenting data on the map
   */
  GIS: {
    /**
     * Return an appropriate pin image name for this `record`.
     */
    pinImage( record) {
      var c = record["category"];

      if (c) {
        var l = c.trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/, "-");
        return l[0].toUpperCase() + l.slice(1) + "-pin";
      } else {
        return "Unknown-pin";
      }
    },

    /**
     * Return appropriate HTML formatted popup content for this
     * `record`.
     */
    popupContent( record) {
      var c = "<h5>" + record[ "name"] + "</h5><table>";

      Object.keys(record).forEach( k => {
        c += "<tr><th>" +
          k +
          "</th><td>" +
          record[ k] +
          "</td></tr>"
      });

      return c + "</table>";
    },

    /**
     * Add an appropriate marker for this `record` on this `view`.
     */
    addPin( record, view) {
      var lat = Number( record[ "latitude"]);
      var lng = Number( record[ "longitude"]);

      if ( !isNaN( lat) && !isNaN( lng)) {
        var pin = L.icon( {iconAnchor: [16, 41],
                           iconSize: [32, 42],
                           iconUrl: "img/map-pins/" +
                           this.pinImage( record) +
                           ".png",
                           riseOnHover: true,
                           shadowAnchor: [16, 23],
                           shadowSize: [57, 24],
                           shadowUrl: "img/map-pins/shadow_pin.png"});
        var marker = L.marker( L.latLng( lat, lng),
                              {icon: pin, title: record["name"]});
        marker.bindPopup( this.popupContent( record));
        marker.addTo( view);

        return marker;
      } else {
        return null;
      }
    },

    /**
     * Remove all pins from this map `view`.
     */
    removePins( view) {
      view.eachLayer( l => {
        if ( l instanceof L.marker) {
          view.removeLayer( l);
        }
      });

      return view;
    },

    /**
     * Pan and zoom this map `view` to focus these `records`.
     * TODO: This isn't working *nearly* as well as the ClojureScript version.
     */
    computeBounds( view, records) {
      if ( records.length > 0) {
        var minLng = 180;
        var maxLng = -180;
        var minLat = 90;
        var maxLat = -90;
        var valid = false;

        records.forEach( r => {
          var lat = r[ "latitude"];
          var lng = r[ "longitude"];

          if ( !isNaN( lat) && !isNaN( lng)) {
            if ( lat > maxLat) maxLat = lat;
            if ( lat < minLat) minLat = lat;
            if ( lng > maxLng) maxLng = lng;
            if ( lng < minLng) minLng = lng;
            valid = true;
          }
        });

        if ( valid) {
          view.fitBounds( [[ maxLat, maxLng],
                           [ minLat, minLng]]);
        }
        //return [ minLat + ( ( maxLat - minLat) / 2),
        //        minLng + ( ( maxLng - minLng) / 2)];
      }
    },

    /**
     * Add a marker to this map `view` for each record in these `records`
     * which has valid `latitude`and `longitude` properties, first removing
     * any existing markers.
     */
    refreshPins( view, records) {
      this.removePins( view);

      records.forEach( r => {
        if( r) {
          this.addPin( r, view);
        }
      });

      this.computeBounds( view, records);
    }
  },

  /**
   * Methods related to displaying the map.
   */
  Map: {
    views: new Object(),

    /**
     * Create a map overlaying the HTML element with this `id`, centered at
     * these `lat` and `lng` coordinates, with this initial `zoom` value.
     */
    createMap(id, lat, lng, zoom) {
      var v = L.map( id).setView( {lat: lat, lon: lng}, zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href=\"https://openstreetmap.org/copyright\">OpenStreetMap contributors</a>"
      }).addTo(v);

      return v;
    },

    /**
     * Add a map view to my named views overlaying the HTML element with this
     * `id` and centered at these `lat` and `lng` coordinates, with this
     * initial `zoom` value, provided that it does not already exist. Return
     * the view.
     */
    addView( id, lat, lng, zoom) {
      /* can"t re-add a view to an element to which we"ve already added one */
      if ( this.views[ id]) {
        return this.views[ id];
      } else {
        var v = this.createMap( id, lat, lng, zoom);
        this.views[ id] = v;
        return v;
      }
    },

    /**
     * Get the view with this `id` from among my named views.
     */
    getView( id) {
      return this.views[ id];
    }
  },

  /**
   * Methods related to notification and logging.
   */
  Notify: {
    /**
     * Show this error `m` to the user and log it.
     */
    error( m) {
      console.error( m);
      document.getElementById( "error").innerText = m;
    },

    /**
     * Show this message `m` to the user and log it.
     */
    message( m) {
      console.log( m);
      document.getElementById( "message").innerText = m;
    }
  },

  /**
   * Initialise a map view overlaying the HTML element with this `id`, and
   * decorate it with markers as specified in the data from this source.
   */
  initialiseMapElement( id, dataSource) {
    this.Notify.message( "initialise_map_element called with arguments id = `" +
                        id + "`");
    var view = this.Map.addView( id, 0, 0, 0);
    var records = this.Data.getData( dataSource);

    if ( records instanceof Array) {
      this.Notify.message( "Found " + records.length +
                          " records of inline data for map " + id);

      this.GIS.refreshPins( view, records);
    } else {
      // is it a URL?
      try {
        fetch(dataSource)
        .then((response) => {
          console.debug( response.blob());

          if (response.ok) {
            return response.text();
          } else {
            throw new Error( "Bad response from server: " + response.status);
          }
        }).then( text => {
          var records = this.Data.getData( text);

          if ( records instanceof Array) {
            this.Notify.message( "Found " + records.length +
                                " records of data for map " + id);

            this.GIS.refreshPins( view, records);
          } else {
            throw new Error( "No data?");
          }
        });
      } catch (error) {
        this.Notify.error( error);
      }
    }
  }
}
