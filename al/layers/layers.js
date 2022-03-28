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
    <img src="styles/legend/provincias_2122_0_0.png" /> 6841 - 184036<br />\
    <img src="styles/legend/provincias_2122_0_1.png" /> 184036 - 361230<br />\
    <img src="styles/legend/provincias_2122_0_2.png" /> 361230 - 538425<br />\
    <img src="styles/legend/provincias_2122_0_3.png" /> 538425 - 715619<br />\
    <img src="styles/legend/provincias_2122_0_4.png" /> 715619 - 892814<br />\
    <img src="styles/legend/provincias_2122_0_5.png" /> 892814 - 1070008<br />'
        });

lyr_provincias_2122_0.setVisible(true);
var layersList = [lyr_provincias_2122_0];
lyr_provincias_2122_0.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'Unidades': 'Unidades', 'Alumnos': 'Alumnos', });
lyr_provincias_2122_0.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'Unidades': 'TextEdit', 'Alumnos': 'TextEdit', });
lyr_provincias_2122_0.set('fieldLabels', {'DPA_PROVIN': 'inline label', 'DPA_DESPRO': 'inline label', 'Unidades': 'inline label', 'Alumnos': 'inline label', });
lyr_provincias_2122_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});