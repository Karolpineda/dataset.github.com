var wms_layers = [];

var format_provincias_2122_0 = new ol.format.GeoJSON();
var features_provincias_2122_0 = format_provincias_2122_0.readFeatures(json_provincias_2122_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincias_2122_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincias_2122_0.addFeatures(features_provincias_2122_0);
var lyr_provincias_2122_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provincias_2122_0, 
                style: style_provincias_2122_0,
                interactive: true,
    title: 'provincias_21-22<br />\
    <img src="styles/legend/provincias_2122_0_0.png" /> 0 - 535<br />\
    <img src="styles/legend/provincias_2122_0_1.png" /> 535 - 1070<br />\
    <img src="styles/legend/provincias_2122_0_2.png" /> 1070 - 1604<br />\
    <img src="styles/legend/provincias_2122_0_3.png" /> 1604 - 2139<br />\
    <img src="styles/legend/provincias_2122_0_4.png" /> 2139 - 2674<br />'
        });

lyr_provincias_2122_0.setVisible(true);
var layersList = [lyr_provincias_2122_0];
lyr_provincias_2122_0.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'Unidades': 'Unidades', });
lyr_provincias_2122_0.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'Unidades': 'TextEdit', });
lyr_provincias_2122_0.set('fieldLabels', {'DPA_PROVIN': 'inline label', 'DPA_DESPRO': 'inline label', 'Unidades': 'inline label', });
lyr_provincias_2122_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});