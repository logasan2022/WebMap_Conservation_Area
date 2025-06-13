ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102100").setExtent([3268768.134460, -1823522.701235, 3740437.145343, -1561378.701235]);
var wms_layers = [];


        var lyr_CartoDB_0 = new ol.layer.Tile({
            'title': 'CartoDB',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_PostoAdministrativo_1 = new ol.format.GeoJSON();
var features_PostoAdministrativo_1 = format_PostoAdministrativo_1.readFeatures(json_PostoAdministrativo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_PostoAdministrativo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostoAdministrativo_1.addFeatures(features_PostoAdministrativo_1);
var lyr_PostoAdministrativo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostoAdministrativo_1, 
                style: style_PostoAdministrativo_1,
                popuplayertitle: 'Posto Administrativo',
                interactive: false,
                title: '<img src="styles/legend/PostoAdministrativo_1.png" /> Posto Administrativo'
            });
var format_LimitesdoDistrito_2 = new ol.format.GeoJSON();
var features_LimitesdoDistrito_2 = format_LimitesdoDistrito_2.readFeatures(json_LimitesdoDistrito_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_LimitesdoDistrito_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdoDistrito_2.addFeatures(features_LimitesdoDistrito_2);
var lyr_LimitesdoDistrito_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesdoDistrito_2, 
                style: style_LimitesdoDistrito_2,
                popuplayertitle: 'Limites do Distrito',
                interactive: true,
                title: '<img src="styles/legend/LimitesdoDistrito_2.png" /> Limites do Distrito'
            });
var format_Povoado_ForaACC_3 = new ol.format.GeoJSON();
var features_Povoado_ForaACC_3 = format_Povoado_ForaACC_3.readFeatures(json_Povoado_ForaACC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Povoado_ForaACC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povoado_ForaACC_3.addFeatures(features_Povoado_ForaACC_3);
var lyr_Povoado_ForaACC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povoado_ForaACC_3, 
                style: style_Povoado_ForaACC_3,
                popuplayertitle: 'Povoado_ForaACC',
                interactive: false,
                title: '<img src="styles/legend/Povoado_ForaACC_3.png" /> Povoado_ForaACC'
            });
var format_reas_de_Conservao_4 = new ol.format.GeoJSON();
var features_reas_de_Conservao_4 = format_reas_de_Conservao_4.readFeatures(json_reas_de_Conservao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_reas_de_Conservao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reas_de_Conservao_4.addFeatures(features_reas_de_Conservao_4);
var lyr_reas_de_Conservao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reas_de_Conservao_4, 
                style: style_reas_de_Conservao_4,
                popuplayertitle: 'Áreas_de_Conservação',
                interactive: true,
    title: 'Áreas_de_Conservação<br />\
    <img src="styles/legend/reas_de_Conservao_4_0.png" /> Zumbo Conservation Area<br />' });
var format_Rio_5 = new ol.format.GeoJSON();
var features_Rio_5 = format_Rio_5.readFeatures(json_Rio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Rio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_5.addFeatures(features_Rio_5);
var lyr_Rio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rio_5, 
                style: style_Rio_5,
                popuplayertitle: 'Rio',
                interactive: false,
                title: '<img src="styles/legend/Rio_5.png" /> Rio'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> '
            });
var format_ESTRADAS_7 = new ol.format.GeoJSON();
var features_ESTRADAS_7 = format_ESTRADAS_7.readFeatures(json_ESTRADAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_ESTRADAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADAS_7.addFeatures(features_ESTRADAS_7);
var lyr_ESTRADAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTRADAS_7, 
                style: style_ESTRADAS_7,
                popuplayertitle: 'ESTRADAS',
                interactive: false,
    title: 'ESTRADAS<br />\
    <img src="styles/legend/ESTRADAS_7_0.png" /> Secundaria<br />\
    <img src="styles/legend/ESTRADAS_7_1.png" /> Tercearias<br />\
    <img src="styles/legend/ESTRADAS_7_2.png" /> Outras<br />' });
var format_PerfilComunitario_8 = new ol.format.GeoJSON();
var features_PerfilComunitario_8 = format_PerfilComunitario_8.readFeatures(json_PerfilComunitario_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_PerfilComunitario_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerfilComunitario_8.addFeatures(features_PerfilComunitario_8);
var lyr_PerfilComunitario_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerfilComunitario_8, 
                style: style_PerfilComunitario_8,
                popuplayertitle: 'PerfilComunitario',
                interactive: true,
                title: '<img src="styles/legend/PerfilComunitario_8.png" /> PerfilComunitario'
            });
var format_Povoados_ForaACC1_9 = new ol.format.GeoJSON();
var features_Povoados_ForaACC1_9 = format_Povoados_ForaACC1_9.readFeatures(json_Povoados_ForaACC1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Povoados_ForaACC1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povoados_ForaACC1_9.addFeatures(features_Povoados_ForaACC1_9);
var lyr_Povoados_ForaACC1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povoados_ForaACC1_9, 
                style: style_Povoados_ForaACC1_9,
                popuplayertitle: 'Povoados_ForaACC1',
                interactive: true,
                title: '<img src="styles/legend/Povoados_ForaACC1_9.png" /> Povoados_ForaACC1'
            });
var format_Povoado_DentroACC_10 = new ol.format.GeoJSON();
var features_Povoado_DentroACC_10 = format_Povoado_DentroACC_10.readFeatures(json_Povoado_DentroACC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Povoado_DentroACC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povoado_DentroACC_10.addFeatures(features_Povoado_DentroACC_10);
var lyr_Povoado_DentroACC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povoado_DentroACC_10, 
                style: style_Povoado_DentroACC_10,
                popuplayertitle: 'Povoado_DentroACC',
                interactive: true,
                title: '<img src="styles/legend/Povoado_DentroACC_10.png" /> Povoado_DentroACC'
            });
var format_SedesdosPostoasAdministrativos_11 = new ol.format.GeoJSON();
var features_SedesdosPostoasAdministrativos_11 = format_SedesdosPostoasAdministrativos_11.readFeatures(json_SedesdosPostoasAdministrativos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_SedesdosPostoasAdministrativos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedesdosPostoasAdministrativos_11.addFeatures(features_SedesdosPostoasAdministrativos_11);
var lyr_SedesdosPostoasAdministrativos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SedesdosPostoasAdministrativos_11, 
                style: style_SedesdosPostoasAdministrativos_11,
                popuplayertitle: 'Sedes dos Postoas Administrativos',
                interactive: true,
                title: '<img src="styles/legend/SedesdosPostoasAdministrativos_11.png" /> Sedes dos Postoas Administrativos'
            });

lyr_CartoDB_0.setVisible(true);lyr_PostoAdministrativo_1.setVisible(true);lyr_LimitesdoDistrito_2.setVisible(true);lyr_Povoado_ForaACC_3.setVisible(true);lyr_reas_de_Conservao_4.setVisible(true);lyr_Rio_5.setVisible(true);lyr__6.setVisible(true);lyr_ESTRADAS_7.setVisible(true);lyr_PerfilComunitario_8.setVisible(true);lyr_Povoados_ForaACC1_9.setVisible(true);lyr_Povoado_DentroACC_10.setVisible(true);lyr_SedesdosPostoasAdministrativos_11.setVisible(true);
var layersList = [lyr_CartoDB_0,lyr_PostoAdministrativo_1,lyr_LimitesdoDistrito_2,lyr_Povoado_ForaACC_3,lyr_reas_de_Conservao_4,lyr_Rio_5,lyr__6,lyr_ESTRADAS_7,lyr_PerfilComunitario_8,lyr_Povoados_ForaACC1_9,lyr_Povoado_DentroACC_10,lyr_SedesdosPostoasAdministrativos_11];
lyr_PostoAdministrativo_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POSTO': 'POSTO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LimitesdoDistrito_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DISTRITO_1': 'DISTRITO_1', 'COD_PROV': 'COD_PROV', 'Província': 'Província', 'COD_DIST': 'COD_DIST', 'UrbanRural': 'UrbanRural', 'Area': 'Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Distr_Cod': 'Distr_Cod', });
lyr_Povoado_ForaACC_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'POSTO': 'POSTO', 'NOME': 'NOME', 'TOTAL': 'TOTAL', 'MASCULINO': 'MASCULINO', 'FEMININO': 'FEMININO', 'AGREGADOS': 'AGREGADOS', 'G': 'G', 'M': 'M', 'S': 'S', 'G_2': 'G_2', 'M_2': 'M_2', 'S_2': 'S_2', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CODIGO_CEN': 'CODIGO_CEN', 'TIPO': 'TIPO', });
lyr_reas_de_Conservao_4.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'CNT_PROVIN': 'CNT_PROVIN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Nome': 'Nome', });
lyr_Rio_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_RIO': 'TIPO_RIO', 'ORDEM': 'ORDEM', 'TOPONIMO': 'TOPONIMO', 'Shape_Leng': 'Shape_Leng', });
lyr__6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'MZROAD_': 'MZROAD_', 'MZROAD_ID': 'MZROAD_ID', 'RDLNTYPE': 'RDLNTYPE', 'RDLNTYPETX': 'RDLNTYPETX', 'RDLNSTAT': 'RDLNSTAT', 'RDLNSTATTX': 'RDLNSTATTX', 'Shape_Leng': 'Shape_Leng', });
lyr_ESTRADAS_7.set('fieldAliases', {'ESTRADA': 'ESTRADA', 'ENOVA': 'ENOVA', 'PROV': 'PROV', 'TROçO': 'TROçO', 'SEQUêNCIA': 'SEQUêNCIA', 'DIST1': 'DIST1', 'S_FIC': 'S_FIC', 'COND': 'COND', 'CODE': 'CODE', 'MANUT96': 'MANUT96', 'TR94': 'TR94', 'SADC': 'SADC', 'C_VIAK': 'C_VIAK', 'D_PAIS': 'D_PAIS', 'T_VELHO': 'T_VELHO', 'LOCAL_I': 'LOCAL_I', 'LOCAL_F': 'LOCAL_F', 'NOD_I': 'NOD_I', 'NOD_F': 'NOD_F', 'CRUZ_I': 'CRUZ_I', 'CRUZ_F': 'CRUZ_F', 'LEVANTADO': 'LEVANTADO', 'TYPE': 'TYPE', 'ROADNO': 'ROADNO', 'PAVEDTYPE': 'PAVEDTYPE', 'ID': 'ID', 'NEWNO': 'NEWNO', 'ROAD_NAME': 'ROAD_NAME', 'REASON': 'REASON', 'PROVINCIA': 'PROVINCIA', 'OLDID': 'OLDID', 'OLDTYPE': 'OLDTYPE', 'UNCONTYPE': 'UNCONTYPE', 'UNCON_NAME': 'UNCON_NAME', 'LENGTH': 'LENGTH', 'ID_TEXT': 'ID_TEXT', 'Geolo': 'Geolo', 'Car_Condit': 'Car_Condit', 'Prov_Proj': 'Prov_Proj', 'ID_Text_de': 'ID_Text_de', 'Phase1': 'Phase1', 'Nat_Proj': 'Nat_Proj', 'New_phase1': 'New_phase1', 'Corridors': 'Corridors', 'Cor_Names': 'Cor_Names', });
lyr_PerfilComunitario_8.set('fieldAliases', {'Ord.': 'Ord.', 'Povoado': 'Povoado', 'Localidade': 'Localidade', 'Posto Admi': 'Posto Administrativo', 'Distrito': 'Distrito', 'Provincia': 'Provincia', 'N° Mulher': 'No de Mulheres', 'N° Homens': 'No de Homens', 'N° Famili': 'N° Famili', 'Nome do l�': 'Nome do Lider', 'Escalão': 'Escalão', 'Sexo': 'Sexo', 'Principais': 'Princ. Serv. Publ. Existentes', 'Principa_1': 'Princ. Activ. Econômicas', 'Principa_2': 'Princ. Culturas Produzidas', 'Nível de': 'Nívell de Associativo', 'Existe CLG': 'Existe CLGRN?', 'Nome CLGRN': 'Nome CLGRN', 'Existe Clu': 'Existe Clube Ambiental e das Raparigas?', 'Nome do Cl': 'Nome do Clube Ambiental e das Raparigas', 'n° de mem': 'N° de membros do Clube Ambiental', 'n° de m_1': 'N° de membros Clube das Raparigas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Povoados_ForaACC1_9.set('fieldAliases', {'Ord.': 'Ord.', 'Povoado': 'Povoado', 'Localidade': 'Localidade', 'Posto Admi': 'Posto Admi', 'Distrito': 'Distrito', 'Provincia': 'Provincia', 'N° Mulher': 'N° Mulher', 'N° Homens': 'N° Homens', 'N° Famili': 'N° Famili', 'Nome do l�': 'Nome do l�', 'Escalão': 'Escalão', 'Sexo': 'Sexo', 'Principais': 'Principais', 'Principa_1': 'Principa_1', 'Principa_2': 'Principa_2', 'Nível de': 'Nível de', 'Existe CLG': 'Existe CLG', 'Nome CLGRN': 'Nome CLGRN', 'Existe Clu': 'Existe Clu', 'Nome do Cl': 'Nome do Cl', 'n° de mem': 'n° de mem', 'n° de m_1': 'n° de m_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Povoado_DentroACC_10.set('fieldAliases', {'Ord.': 'Ord.', 'Povoado': 'Povoado', 'Localidade': 'Localidade', 'Posto Admi': 'Posto Administrativo', 'Distrito': 'Distrito', 'Provincia': 'Provincia', 'N° Mulher': 'No de Mulheres', 'N° Homens': 'No de Homens', 'N° Famili': 'No de Familias', 'Nome do l�': 'Nome do Lider', 'Escalão': 'Escalão', 'Sexo': 'Sexo', 'Principais': 'Princ. Serv. Publ. Existentes', 'Principa_1': 'Princ. Activ. Econômicas', 'Principa_2': 'Princ. Culturas Produzidas', 'Nível de': 'Nívell de Associativo', 'Existe CLG': 'Existe CLGRN?', 'Nome CLGRN': 'Nome CLGRN', 'Existe Clu': 'Existe Clube Ambiental e das Raparigas?', 'Nome do Cl': 'Nome do Clube Ambiental e das Raparigas', 'n° de mem': 'N° de membros do Clube Ambiental', 'n° de m_1': 'N° de membros Clube das Raparigas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SedesdosPostoasAdministrativos_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO_TOP': 'TIPO_TOP', 'TOPONIMO': 'TOPONIMO', });
lyr_PostoAdministrativo_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'POSTO': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_LimitesdoDistrito_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DISTRITO_1': 'Hidden', 'COD_PROV': 'Hidden', 'Província': 'Hidden', 'COD_DIST': 'Hidden', 'UrbanRural': 'Hidden', 'Area': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', 'Distr_Cod': 'Hidden', });
lyr_Povoado_ForaACC_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'ID': 'Hidden', 'PROVINCIA': 'Hidden', 'DISTRITO': 'Hidden', 'POSTO': 'Hidden', 'NOME': 'TextEdit', 'TOTAL': 'TextEdit', 'MASCULINO': 'TextEdit', 'FEMININO': 'TextEdit', 'AGREGADOS': 'TextEdit', 'G': 'Hidden', 'M': 'Hidden', 'S': 'Hidden', 'G_2': 'Hidden', 'M_2': 'Hidden', 'S_2': 'Hidden', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CODIGO_CEN': 'Hidden', 'TIPO': 'Hidden', });
lyr_reas_de_Conservao_4.set('fieldImages', {'PROVINCIA': 'Hidden', 'CNT_PROVIN': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'Nome': 'Hidden', });
lyr_Rio_5.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'TextEdit', 'TIPO_RIO': 'Hidden', 'ORDEM': 'Hidden', 'TOPONIMO': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr__6.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'FNODE_': 'Hidden', 'TNODE_': 'Hidden', 'LPOLY_': 'Hidden', 'RPOLY_': 'Hidden', 'LENGTH': 'Hidden', 'MZROAD_': 'Hidden', 'MZROAD_ID': 'Hidden', 'RDLNTYPE': 'TextEdit', 'RDLNTYPETX': 'Hidden', 'RDLNSTAT': 'Hidden', 'RDLNSTATTX': 'Hidden', 'Shape_Leng': 'Hidden', });
lyr_ESTRADAS_7.set('fieldImages', {'ESTRADA': 'Range', 'ENOVA': 'Range', 'PROV': 'Range', 'TROçO': 'TextEdit', 'SEQUêNCIA': 'Range', 'DIST1': 'TextEdit', 'S_FIC': 'TextEdit', 'COND': 'TextEdit', 'CODE': 'TextEdit', 'MANUT96': 'TextEdit', 'TR94': 'Range', 'SADC': 'Range', 'C_VIAK': 'TextEdit', 'D_PAIS': 'TextEdit', 'T_VELHO': 'Range', 'LOCAL_I': 'TextEdit', 'LOCAL_F': 'TextEdit', 'NOD_I': 'Range', 'NOD_F': 'Range', 'CRUZ_I': 'TextEdit', 'CRUZ_F': 'TextEdit', 'LEVANTADO': 'TextEdit', 'TYPE': 'TextEdit', 'ROADNO': 'TextEdit', 'PAVEDTYPE': 'TextEdit', 'ID': 'TextEdit', 'NEWNO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'REASON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'OLDID': 'TextEdit', 'OLDTYPE': 'TextEdit', 'UNCONTYPE': 'TextEdit', 'UNCON_NAME': 'TextEdit', 'LENGTH': 'TextEdit', 'ID_TEXT': 'TextEdit', 'Geolo': 'TextEdit', 'Car_Condit': 'TextEdit', 'Prov_Proj': 'TextEdit', 'ID_Text_de': 'TextEdit', 'Phase1': 'TextEdit', 'Nat_Proj': 'TextEdit', 'New_phase1': 'TextEdit', 'Corridors': 'TextEdit', 'Cor_Names': 'TextEdit', });
lyr_PerfilComunitario_8.set('fieldImages', {'Ord.': 'Hidden', 'Povoado': 'TextEdit', 'Localidade': 'TextEdit', 'Posto Admi': 'TextEdit', 'Distrito': 'Hidden', 'Provincia': 'Hidden', 'N° Mulher': 'TextEdit', 'N° Homens': 'TextEdit', 'N° Famili': 'TextEdit', 'Nome do l�': 'TextEdit', 'Escalão': 'TextEdit', 'Sexo': 'TextEdit', 'Principais': 'TextEdit', 'Principa_1': 'TextEdit', 'Principa_2': 'TextEdit', 'Nível de': 'TextEdit', 'Existe CLG': 'TextEdit', 'Nome CLGRN': 'TextEdit', 'Existe Clu': 'TextEdit', 'Nome do Cl': 'TextEdit', 'n° de mem': 'TextEdit', 'n° de m_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Povoados_ForaACC1_9.set('fieldImages', {'Ord.': 'TextEdit', 'Povoado': 'TextEdit', 'Localidade': 'TextEdit', 'Posto Admi': 'TextEdit', 'Distrito': 'TextEdit', 'Provincia': 'TextEdit', 'N° Mulher': 'TextEdit', 'N° Homens': 'TextEdit', 'N° Famili': 'TextEdit', 'Nome do l�': 'TextEdit', 'Escalão': 'TextEdit', 'Sexo': 'TextEdit', 'Principais': 'TextEdit', 'Principa_1': 'TextEdit', 'Principa_2': 'TextEdit', 'Nível de': 'TextEdit', 'Existe CLG': 'TextEdit', 'Nome CLGRN': 'TextEdit', 'Existe Clu': 'TextEdit', 'Nome do Cl': 'TextEdit', 'n° de mem': 'TextEdit', 'n° de m_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Povoado_DentroACC_10.set('fieldImages', {'Ord.': 'Hidden', 'Povoado': 'TextEdit', 'Localidade': 'TextEdit', 'Posto Admi': 'TextEdit', 'Distrito': 'Hidden', 'Provincia': 'Hidden', 'N° Mulher': 'TextEdit', 'N° Homens': 'TextEdit', 'N° Famili': 'TextEdit', 'Nome do l�': 'TextEdit', 'Escalão': 'TextEdit', 'Sexo': 'TextEdit', 'Principais': 'TextEdit', 'Principa_1': 'TextEdit', 'Principa_2': 'TextEdit', 'Nível de': 'TextEdit', 'Existe CLG': 'TextEdit', 'Nome CLGRN': 'TextEdit', 'Existe Clu': 'TextEdit', 'Nome do Cl': 'TextEdit', 'n° de mem': 'TextEdit', 'n° de m_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SedesdosPostoasAdministrativos_11.set('fieldImages', {'OBJECTID': 'Hidden', 'TIPO_TOP': 'Hidden', 'TOPONIMO': 'TextEdit', });
lyr_PostoAdministrativo_1.set('fieldLabels', {});
lyr_LimitesdoDistrito_2.set('fieldLabels', {});
lyr_Povoado_ForaACC_3.set('fieldLabels', {'NOME': 'inline label - always visible', 'TOTAL': 'inline label - always visible', 'MASCULINO': 'inline label - always visible', 'FEMININO': 'inline label - always visible', 'AGREGADOS': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_reas_de_Conservao_4.set('fieldLabels', {});
lyr_Rio_5.set('fieldLabels', {'OBJECTID': 'no label', 'TOPONIMO': 'no label', });
lyr__6.set('fieldLabels', {'RDLNTYPE': 'hidden field', });
lyr_ESTRADAS_7.set('fieldLabels', {'ESTRADA': 'no label', 'ENOVA': 'no label', 'PROV': 'no label', 'TROçO': 'no label', 'SEQUêNCIA': 'no label', 'DIST1': 'no label', 'S_FIC': 'no label', 'COND': 'no label', 'CODE': 'no label', 'MANUT96': 'no label', 'TR94': 'no label', 'SADC': 'no label', 'C_VIAK': 'no label', 'D_PAIS': 'no label', 'T_VELHO': 'no label', 'LOCAL_I': 'no label', 'LOCAL_F': 'no label', 'NOD_I': 'no label', 'NOD_F': 'no label', 'CRUZ_I': 'no label', 'CRUZ_F': 'no label', 'LEVANTADO': 'no label', 'TYPE': 'no label', 'ROADNO': 'no label', 'PAVEDTYPE': 'no label', 'ID': 'no label', 'NEWNO': 'no label', 'ROAD_NAME': 'no label', 'REASON': 'no label', 'PROVINCIA': 'no label', 'OLDID': 'no label', 'OLDTYPE': 'no label', 'UNCONTYPE': 'no label', 'UNCON_NAME': 'no label', 'LENGTH': 'no label', 'ID_TEXT': 'no label', 'Geolo': 'no label', 'Car_Condit': 'no label', 'Prov_Proj': 'no label', 'ID_Text_de': 'no label', 'Phase1': 'no label', 'Nat_Proj': 'no label', 'New_phase1': 'no label', 'Corridors': 'no label', 'Cor_Names': 'no label', });
lyr_PerfilComunitario_8.set('fieldLabels', {'Povoado': 'inline label - always visible', 'Localidade': 'inline label - always visible', 'Posto Admi': 'inline label - always visible', 'N° Mulher': 'inline label - always visible', 'N° Homens': 'inline label - always visible', 'N° Famili': 'inline label - always visible', 'Nome do l�': 'inline label - always visible', 'Escalão': 'inline label - always visible', 'Sexo': 'inline label - always visible', 'Principais': 'inline label - always visible', 'Principa_1': 'inline label - always visible', 'Principa_2': 'inline label - always visible', 'Nível de': 'inline label - always visible', 'Existe CLG': 'inline label - always visible', 'Nome CLGRN': 'inline label - always visible', 'Existe Clu': 'inline label - always visible', 'Nome do Cl': 'inline label - always visible', 'n° de mem': 'inline label - always visible', 'n° de m_1': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Povoados_ForaACC1_9.set('fieldLabels', {'Ord.': 'no label', 'Povoado': 'no label', 'Localidade': 'no label', 'Posto Admi': 'no label', 'Distrito': 'no label', 'Provincia': 'no label', 'N° Mulher': 'no label', 'N° Homens': 'no label', 'N° Famili': 'no label', 'Nome do l�': 'no label', 'Escalão': 'no label', 'Sexo': 'no label', 'Principais': 'no label', 'Principa_1': 'no label', 'Principa_2': 'no label', 'Nível de': 'no label', 'Existe CLG': 'no label', 'Nome CLGRN': 'no label', 'Existe Clu': 'no label', 'Nome do Cl': 'no label', 'n° de mem': 'no label', 'n° de m_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Povoado_DentroACC_10.set('fieldLabels', {'Povoado': 'inline label - always visible', 'Localidade': 'inline label - always visible', 'Posto Admi': 'inline label - always visible', 'N° Mulher': 'no label', 'N° Homens': 'no label', 'N° Famili': 'inline label - always visible', 'Nome do l�': 'no label', 'Escalão': 'inline label - always visible', 'Sexo': 'inline label - always visible', 'Principais': 'inline label - always visible', 'Principa_1': 'inline label - always visible', 'Principa_2': 'inline label - always visible', 'Nível de': 'inline label - always visible', 'Existe CLG': 'inline label - always visible', 'Nome CLGRN': 'inline label - always visible', 'Existe Clu': 'inline label - always visible', 'Nome do Cl': 'inline label - always visible', 'n° de mem': 'inline label - always visible', 'n° de m_1': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SedesdosPostoasAdministrativos_11.set('fieldLabels', {'TOPONIMO': 'inline label - always visible', });
lyr_SedesdosPostoasAdministrativos_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});