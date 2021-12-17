/*
 * @Author: wxj
 * @Date: 2021-07-27 17:10:04
 * @LastEditTime: 2021-12-16 17:18:36
 * @LastEditors: wxj
 * @Description:
 * @FilePath: \XS_IndustryHighQuality.App\src\types\global.d.ts
 */
interface Window {
  globalConfig: {
    API_ROOT: string;
    APP_ROOT: string;
    ARCGIS_API_ROOT: string;
    PDF_SEARCH_API: string;
    ARCGIS_URL_ROOT: string;
    ARCGIS_PROXY_ROOT: string;
    ARCGIS_SPATIALREFERENCE: number;
    ARCGIS_BASEMAP1: string;
    ARCGIS_BASEMAP2: string;
    PROXY: {
      URL_PREFIX: string;
      PROXY_URL: string;
    }[];
    VIDEO_DIR: string;
    localStorageKey: string;
    Root_Url: string;
  };
  mapView: __esri.MapView | undefined;
}
// type Store = {
//   counter: { value: number };
// };
