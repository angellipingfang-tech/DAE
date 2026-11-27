(function () {
  // International Standard Atmosphere (1976), geopotential altitude in meters.
  var GAS_CONSTANT = 287.053;
  var GRAVITY = 9.80665;
  var EARTH_RADIUS_M = 6356766;
  var MAX_ALTITUDE_M = 86000;
  var FEET_PER_METER = 3.28084;

  var LAYERS = [
    { base: 0, temp: 288.15, lapse: -0.0065, pressure: 101325 },
    { base: 11000, temp: 216.65, lapse: 0, pressure: 22632.06 },
    { base: 20000, temp: 216.65, lapse: 0.001, pressure: 5474.889 },
    { base: 32000, temp: 228.65, lapse: 0.0028, pressure: 868.0187 },
    { base: 47000, temp: 270.65, lapse: 0, pressure: 110.9063 },
    { base: 51000, temp: 270.65, lapse: -0.0028, pressure: 66.93887 },
    { base: 71000, temp: 214.65, lapse: -0.002, pressure: 3.95642 }
  ];

  function toGeopotential(geometricMeters) {
    return (EARTH_RADIUS_M * geometricMeters) / (EARTH_RADIUS_M + geometricMeters);
  }

  function findLayer(geopotentialMeters) {
    var layer = LAYERS[0];
    for (var i = 0; i < LAYERS.length; i++) {
      if (geopotentialMeters >= LAYERS[i].base) {
        layer = LAYERS[i];
      }
    }
    return layer;
  }

  function calculateAtmosphere(geometricMeters) {
    var h = toGeopotential(geometricMeters);
    var layer = findLayer(h);
    var dh = h - layer.base;
    var temperature = layer.temp + layer.lapse * dh;
    var pressure;

    if (layer.lapse === 0) {
      pressure = layer.pressure * Math.exp((-GRAVITY * dh) / (GAS_CONSTANT * layer.temp));
    } else {
      pressure = layer.pressure * Math.pow(layer.temp / temperature, GRAVITY / (GAS_CONSTANT * layer.lapse));
    }

    return {
      temperature: temperature,
      pressure: pressure,
      density: pressure / (GAS_CONSTANT * temperature)
    };
  }

  function formatNumber(value) {
    if (value >= 1000) {
      return String(Math.round(value));
    }
    if (value >= 0.01) {
      return String(Number(value.toPrecision(4)));
    }
    return value.toExponential(3);
  }

  var form = document.getElementById("atmosphere-form");
  var input = document.getElementById("altitude");
  var unitSelect = document.getElementById("unit");
  var errorBox = document.getElementById("error");
  var results = document.getElementById("results");
  var outTempK = document.getElementById("out-temp-k");
  var outTempC = document.getElementById("out-temp-c");
  var outPressure = document.getElementById("out-pressure");
  var outDensity = document.getElementById("out-density");

  function showError(message) {
    results.hidden = true;
    errorBox.textContent = message;
  }

  function rangeMessage() {
    if (unitSelect.value === "feet") {
      return "Enter an altitude between 0 and 282,152 feet.";
    }
    return "Enter an altitude between 0 and 86,000 meters.";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorBox.textContent = "";

    var raw = input.value.trim();
    if (raw === "") {
      showError("Please enter an altitude as a number.");
      return;
    }

    var value = Number(raw);
    if (!isFinite(value)) {
      showError("Please enter an altitude as a number.");
      return;
    }

    var meters = unitSelect.value === "feet" ? value / FEET_PER_METER : value;
    if (meters < 0 || meters > MAX_ALTITUDE_M + 0.5) {
      showError(rangeMessage());
      return;
    }

    var result = calculateAtmosphere(Math.min(meters, MAX_ALTITUDE_M));
    outTempK.textContent = result.temperature.toFixed(2);
    outTempC.textContent = (result.temperature - 273.15).toFixed(2);
    outPressure.textContent = formatNumber(result.pressure);
    outDensity.textContent = formatNumber(result.density);
    results.hidden = false;
  });
})();
