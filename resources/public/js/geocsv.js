/**
 * OK, right out of my comfort zone; rewrite geocsv-lite in pure JavaScript.
 *
 * Presuposes the availability of Leaflet as L, and of PapaParse as Papa.
 */

var GeoCSV = {
  Data: {
    prepareRecord( ks, vs) {
      var record = new Object();

      for ( i = 0; i < Math.min( ks.length, vs.length); i++) {
          record[ ks[ i]] = vs[ i];
      }

      return record;
    },

    prepareRecords( data) {
      var cols = data[0].forEach( c => {
        c.trim().toLowerCase().replace( /[^\w\d]+/, "-");
      });

      var rest = data.slice( 1);

      // I should be able to do this with a forEach over data.slice( 1), but
      // I've failed to make it work.
      var result = [];

      for ( j = 1; j < rest.length; j++) {
        result[ j] = this.prepareRecord( cols, rest[j]);
      }

      return result;
    },

    getData( data_source) {
      var p = Papa.parse( data_source);
      var data = p.data;

      if ( p.errors.length > 0) {
        try {
          data = JSON.parse( data_source);
        }
        catch( anything) {
          data = null;
        }
      }

      if ( data instanceof Array) {
        return this.prepareRecords( data);
      } else {
        return null;
      }
    }
  },
  GIS: {
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

    popupContent( record) {
      var c = "<h5>" + record[ "name"] + "</h5><table>";

      record.keys().foreach( k => {
        c += "<tr><th>" +
          k +
          "</th><td>" +
          record[ k] +
          "</td></tr>"
      });

      return c + "</table>";
    },

    addPin( record, index, view) {
      var lat = Number( record[ "latitude"]);
      var lng = Number( record[ "longitude"]);
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
      marker.bindPopup( popupContent( record));
      marker.addTo( view);

      return marker;
    },

    removePins( view) {
      view.eachLayer( l => {
        if ( l instanceof L.marker) {
          view.removeLayer( l);
        }
      });

      return view;
    },

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

    refreshPins( view, records) {
      removePins( view);
      record.forEach( r => {
      });
      computeBounds( view, records);
    }
  },

  Map: {
    views: new Object(),

    didMount(id, lat, lng, zoom) {
      var v = L.map( id).setView( {lat: lat, lon: lng}, zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href=\"https://openstreetmap.org/copyright\">OpenStreetMap contributors</a>"
      }).addTo(v);

      return v;
    },

    addView( id, lat, lng, zoom) {
      /* can"t re-add a view to an element to which we"ve already added one */
      if ( this.views[ id]) {
        return this.views[ id];
      } else {
        var v = this.didMount( id, lat, lng, zoom);
        this.views[ id] = v;
        return v;
      }
    },

    getView( id) {
      return this.views[ id];
    }
  },

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

  initialise_map_element( id, data_source) {
    this.Notify.message( "initialise_map_element called with arguments id = `" +
                        id + "`");
    var view = this.Map.addView( id, 0, 0, 0);
    var records = this.Data.getData( data_source);

    if ( records instanceof Array) {
      this.Notify.message( "Found " + records.length +
                          " records of inline data for map " + id);

      this.Gis.refreshPins( view, records);
    }
  }
}
