var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MALLA_TIJUANA_CARTAS1K_1 = new ol.format.GeoJSON();
var features_MALLA_TIJUANA_CARTAS1K_1 = format_MALLA_TIJUANA_CARTAS1K_1.readFeatures(json_MALLA_TIJUANA_CARTAS1K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALLA_TIJUANA_CARTAS1K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALLA_TIJUANA_CARTAS1K_1.addFeatures(features_MALLA_TIJUANA_CARTAS1K_1);
var lyr_MALLA_TIJUANA_CARTAS1K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALLA_TIJUANA_CARTAS1K_1, 
                style: style_MALLA_TIJUANA_CARTAS1K_1,
                popuplayertitle: 'MALLA_TIJUANA_CARTAS1K',
                interactive: true,
                title: '<img src="styles/legend/MALLA_TIJUANA_CARTAS1K_1.png" /> MALLA_TIJUANA_CARTAS1K'
            });
var format_PROCESADAS_2 = new ol.format.GeoJSON();
var features_PROCESADAS_2 = format_PROCESADAS_2.readFeatures(json_PROCESADAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROCESADAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROCESADAS_2.addFeatures(features_PROCESADAS_2);
var lyr_PROCESADAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROCESADAS_2, 
                style: style_PROCESADAS_2,
                popuplayertitle: 'PROCESADAS',
                interactive: false,
                title: '<img src="styles/legend/PROCESADAS_2.png" /> PROCESADAS'
            });
var format_VOLADAS_3 = new ol.format.GeoJSON();
var features_VOLADAS_3 = format_VOLADAS_3.readFeatures(json_VOLADAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOLADAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOLADAS_3.addFeatures(features_VOLADAS_3);
var lyr_VOLADAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOLADAS_3, 
                style: style_VOLADAS_3,
                popuplayertitle: 'VOLADAS',
                interactive: false,
                title: '<img src="styles/legend/VOLADAS_3.png" /> VOLADAS'
            });
var format_ENTREGADAS_4 = new ol.format.GeoJSON();
var features_ENTREGADAS_4 = format_ENTREGADAS_4.readFeatures(json_ENTREGADAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTREGADAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTREGADAS_4.addFeatures(features_ENTREGADAS_4);
var lyr_ENTREGADAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTREGADAS_4, 
                style: style_ENTREGADAS_4,
                popuplayertitle: 'ENTREGADAS',
                interactive: false,
                title: '<img src="styles/legend/ENTREGADAS_4.png" /> ENTREGADAS'
            });

lyr_google_0.setVisible(true);lyr_MALLA_TIJUANA_CARTAS1K_1.setVisible(true);lyr_PROCESADAS_2.setVisible(false);lyr_VOLADAS_3.setVisible(false);lyr_ENTREGADAS_4.setVisible(false);
var layersList = [lyr_google_0,lyr_MALLA_TIJUANA_CARTAS1K_1,lyr_PROCESADAS_2,lyr_VOLADAS_3,lyr_ENTREGADAS_4];
lyr_MALLA_TIJUANA_CARTAS1K_1.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_PROCESADAS_2.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_VOLADAS_3.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_ENTREGADAS_4.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_MALLA_TIJUANA_CARTAS1K_1.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_PROCESADAS_2.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_VOLADAS_3.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_ENTREGADAS_4.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_MALLA_TIJUANA_CARTAS1K_1.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'hidden field', 'SECTOR': 'hidden field', });
lyr_PROCESADAS_2.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_VOLADAS_3.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_ENTREGADAS_4.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_ENTREGADAS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});