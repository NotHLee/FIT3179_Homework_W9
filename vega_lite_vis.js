var vg_1 = "stations.vg.json";
var vg_2 = "stripplot.vg.json";

vegaEmbed("#stations", vg_1).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#stripplot", vg_2).then(function(result) {

}).catch(console.error);