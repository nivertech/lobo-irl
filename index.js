
var request = require('superagent'),
    xml2js  = require('xml2js'),
    _       = require('lodash');

/**
 * @private
 * Lists all available measurement types and their information.
 * All data sourced from http://fau.loboviz.com
 */
var measurements = {
    temperature: {  },
    salinity: { }
};

/**
 * @private
 * Lists all sensors in the network and their information.
 * All data sourced from http://fau.loboviz.com
 */
var sensors = {
    'IRL-FP': {
        url: 'http://fau.loboviz.com/0054.wml',
        description: 'Indian River Lagoon - Fort Pierce',
        location: { lat: 27.475555, lng: -80.326607 }
    },
    'IRL-LP': {
        url: 'http://fau.loboviz.com/0035.wml',
        description: 'Indian River Lagoon - Link Port',
        location: { lat: 27.534839, lng: -80.343113 }
    },
    'IRL-SB': {
        url: 'http://fau.loboviz.com/0056.wml',
        description: 'Indian River Lagoon - Sebastian',
        location: { lat: 27.839089, lng: -80.470822 }
    },
    'IRL-VB': {
        url: 'http://fau.loboviz.com/0055.wml',
        description: 'Indian River Lagoon - Vero Beach',
        location: { lat: 27.590117, lng: -80.355258 }
    },
    'IRL-JB': {
        url: 'http://fau.loboviz.com/0062.wml',
        description: 'Indian River Lagoon-Jensen Beach',
        location: { lat: 27.224389, lng: -80.202333 }
    },
    'IRL-SLE': {
        url: 'http://fau.loboviz.com/0061.wml',
        description: 'Indian River Lagoon-St. Lucie Estuary',
        location: { lat: 27.164947, lng: -80.171844 }
    },
    'SLE-ME': {
        url: 'http://fau.loboviz.com/0060.wml',
        description: 'St. Lucie Estuary-Middle Estuary',
        location: { lat: 27.208928, lng: -80.247974 }
    },
    'SLE-NF': {
        url: 'http://fau.loboviz.com/0058.wml',
        description: 'St. Lucie Estuary-North Fork',
        location: { lat: 27.210028, lng: -80.269200 }
    },
    'SLE-SF': {
        url: 'http://fau.loboviz.com/0057.wml',
        description: 'St. Lucie Estuary-South Fork',
        location: { lat: 27.187789, lng: -80.264180 }
    }
};

/**
 * Returns a list of sensors.
 * @param minLat (Optional) The minimum latitude.
 * @param maxLat (Optional) The maximum latitude.
 * @param minLng (Optional) The minimum longitude.
 * @param maxLng (Optional) The maximum longitude.
 * @returns {Array} The collection of sensor names within the given area.
 */
exports.getSensors = function (minLat, maxLat, minLng, maxLng) {
    if (minLat && maxLat && minLng && maxLng) {
        var result = [];
        for (var sensor in sensors) {
            if (sensors.hasOwnProperty(sensor)) {
                if (sensor.location.lat >= minLat &&
                    sensor.location.lat <= maxLat &&
                    sensor.location.lng >= minLng &&
                    sensor.location.lng <= maxLng) {
                    result.push(sensor);
                }
            }
        }
        return result;
    }
    return _(sensors).keys();
};

exports.getSensors = function (minLat, maxLat, minLng, maxLng) {
};

exports.getSensorInfo = function (sensor) {
    return sensors[sensor];
};