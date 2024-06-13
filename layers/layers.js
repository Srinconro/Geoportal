var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Referencia_1 = new ol.format.GeoJSON();
var features_Referencia_1 = format_Referencia_1.readFeatures(json_Referencia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Referencia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Referencia_1.addFeatures(features_Referencia_1);
var lyr_Referencia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Referencia_1, 
                style: style_Referencia_1,
                popuplayertitle: "Referencia",
                interactive: true,
                title: '<img src="styles/legend/Referencia_1.png" /> Referencia'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Referencia_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Referencia_1];
lyr_Referencia_1.set('fieldAliases', {'id': 'id', });
lyr_Referencia_1.set('fieldImages', {'id': '', });
lyr_Referencia_1.set('fieldLabels', {'id': 'no label', });
lyr_Referencia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});