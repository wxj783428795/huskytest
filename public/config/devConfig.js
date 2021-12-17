console.log("=======开发环境配置文件=======")

//开发环境和公司线上环境
window.globalConfig = {
    API_ROOT: 'http://172.16.9.123:7004/cydn-api/api', //api 路径
    APP_ROOT: 'http://172.16.9.123:7004', //系统部署路径
    ARCGIS_API_ROOT: 'http://172.16.9.121:8078', //arcgis js api地址
    ARCGIS_PROXY_ROOT: 'http://172.16.9.121:8384', //arcgis 代理url
    ARCGIS_URL_ROOT: 'http://172.16.9.114:6080', // arcgis 服务url
    ARCGIS_SPATIALREFERENCE: 4326, //arcgis spatialreference
    ARCGIS_BASEMAP1: 'http://172.16.9.114:6080/arcgis/rest/services/BaseMap/szdzdt2019/MapServer', //彩色版底图
    ARCGIS_BASEMAP2: 'http://172.16.9.114:6080/arcgis/rest/services/BaseMap/SZDOM2017_wgs84/MapServer', //影像图
    PROXY: [
        //代理规则
        {
            URL_PREFIX: 'http://172.16.9.114:6080',
            PROXY_URL: 'http://172.16.9.121:8384/proxy/proxy.ashx',
        },
    ],
    localStorageKey: 'userinfo',
    Root_Url: 'http://localhost:3210'
};
