var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CORDOBA_1 = new ol.format.GeoJSON();
var features_CORDOBA_1 = format_CORDOBA_1.readFeatures(json_CORDOBA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORDOBA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORDOBA_1.addFeatures(features_CORDOBA_1);
var lyr_CORDOBA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CORDOBA_1, 
                style: style_CORDOBA_1,
                interactive: true,
                title: '<img src="styles/legend/CORDOBA_1.png" /> CORDOBA'
            });
var format_rec_CENTROSPOBLADOS_2 = new ol.format.GeoJSON();
var features_rec_CENTROSPOBLADOS_2 = format_rec_CENTROSPOBLADOS_2.readFeatures(json_rec_CENTROSPOBLADOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rec_CENTROSPOBLADOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rec_CENTROSPOBLADOS_2.addFeatures(features_rec_CENTROSPOBLADOS_2);
var lyr_rec_CENTROSPOBLADOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rec_CENTROSPOBLADOS_2, 
                style: style_rec_CENTROSPOBLADOS_2,
                interactive: true,
    title: 'rec_CENTROS POBLADOS<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_0.png" /> BARRIO<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_1.png" /> CASERIO<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_2.png" /> CIUDAD<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_3.png" /> COLONIA<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_4.png" /> LOCALIDAD<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_5.png" /> PARAJE<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_6.png" /> PUEBLO<br />\
    <img src="styles/legend/rec_CENTROSPOBLADOS_2_7.png" /> VILLA<br />'
        });
var format_rec_RIOS_3 = new ol.format.GeoJSON();
var features_rec_RIOS_3 = format_rec_RIOS_3.readFeatures(json_rec_RIOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rec_RIOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rec_RIOS_3.addFeatures(features_rec_RIOS_3);
var lyr_rec_RIOS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rec_RIOS_3, 
                style: style_rec_RIOS_3,
                interactive: true,
    title: 'rec_RIOS<br />\
    <img src="styles/legend/rec_RIOS_3_0.png" /> INTERMITENTE<br />\
    <img src="styles/legend/rec_RIOS_3_1.png" /> PERMANENTE<br />'
        });
var format_rec_RUTAS_4 = new ol.format.GeoJSON();
var features_rec_RUTAS_4 = format_rec_RUTAS_4.readFeatures(json_rec_RUTAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rec_RUTAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rec_RUTAS_4.addFeatures(features_rec_RUTAS_4);
var lyr_rec_RUTAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rec_RUTAS_4, 
                style: style_rec_RUTAS_4,
                interactive: true,
    title: 'rec_RUTAS<br />\
    <img src="styles/legend/rec_RUTAS_4_0.png" /> LOCAL<br />\
    <img src="styles/legend/rec_RUTAS_4_1.png" /> NACIONAL<br />\
    <img src="styles/legend/rec_RUTAS_4_2.png" /> PROVINCIAL<br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_CORDOBA_1.setVisible(true);lyr_rec_CENTROSPOBLADOS_2.setVisible(true);lyr_rec_RIOS_3.setVisible(true);lyr_rec_RUTAS_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_CORDOBA_1,lyr_rec_CENTROSPOBLADOS_2,lyr_rec_RIOS_3,lyr_rec_RUTAS_4];
lyr_CORDOBA_1.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_rec_CENTROSPOBLADOS_2.set('fieldAliases', {'UNION': 'UNION', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'PROVINCIA': 'PROVINCIA', 'DEPARTAMEN': 'DEPARTAMEN', 'HABITANTES': 'HABITANTES', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', 'NIVEL': 'NIVEL', '5JUN': '5JUN', '8JUN': '8JUN', });
lyr_rec_RIOS_3.set('fieldAliases', {'TIPO': 'TIPO', 'REGIMEN': 'REGIMEN', 'NOMBRE': 'NOMBRE', 'FUENTE': 'FUENTE', 'PROVINCIA': 'PROVINCIA', });
lyr_rec_RUTAS_4.set('fieldAliases', {'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'JURIDICCIO': 'JURIDICCIO', 'ESTADO': 'ESTADO', 'FUENTE': 'FUENTE', 'SENTIDO': 'SENTIDO', 'layer': 'layer', 'path': 'path', 'PROVINCIA': 'PROVINCIA', });
lyr_CORDOBA_1.set('fieldImages', {'PROVINCIA': '', 'CAPITAL': '', 'FUENTE': '', });
lyr_rec_CENTROSPOBLADOS_2.set('fieldImages', {'UNION': '', 'NOMBRE': '', 'TIPO': '', 'PROVINCIA': '', 'DEPARTAMEN': '', 'HABITANTES': '', 'PAIS': '', 'OBSERVACIO': '', 'HOJA': '', 'FUENTE': '', 'NIVEL': '', '5JUN': '', '8JUN': '', });
lyr_rec_RIOS_3.set('fieldImages', {'TIPO': '', 'REGIMEN': '', 'NOMBRE': '', 'FUENTE': '', 'PROVINCIA': '', });
lyr_rec_RUTAS_4.set('fieldImages', {'TIPO': '', 'NOMBRE': '', 'JURIDICCIO': '', 'ESTADO': '', 'FUENTE': '', 'SENTIDO': '', 'layer': '', 'path': '', 'PROVINCIA': '', });
lyr_CORDOBA_1.set('fieldLabels', {'PROVINCIA': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_rec_CENTROSPOBLADOS_2.set('fieldLabels', {'UNION': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'PROVINCIA': 'no label', 'DEPARTAMEN': 'no label', 'HABITANTES': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', 'NIVEL': 'no label', '5JUN': 'no label', '8JUN': 'no label', });
lyr_rec_RIOS_3.set('fieldLabels', {'TIPO': 'no label', 'REGIMEN': 'no label', 'NOMBRE': 'no label', 'FUENTE': 'no label', 'PROVINCIA': 'no label', });
lyr_rec_RUTAS_4.set('fieldLabels', {'TIPO': 'no label', 'NOMBRE': 'no label', 'JURIDICCIO': 'no label', 'ESTADO': 'no label', 'FUENTE': 'no label', 'SENTIDO': 'no label', 'layer': 'no label', 'path': 'no label', 'PROVINCIA': 'no label', });
lyr_rec_RUTAS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});