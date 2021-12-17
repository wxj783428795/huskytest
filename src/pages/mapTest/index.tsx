/*
 * @Author: wxj
 * @Date: 2021-12-16 17:22:15
 * @LastEditTime: 2021-12-16 17:22:16
 * @LastEditors: wxj
 * @Description: 地图加载测试页
 * @FilePath: \XS_IndustryHighQuality.App\src\pages\mapTest\index.tsx
 */
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import React, { useEffect } from 'react';

const MapTest = () => {
  useEffect(() => {
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new MapView({
      container: 'viewDiv',
      map: map,
      zoom: 4,
      center: [15, 65], // longitude, latitude
    });
  }, []);
  return <div id="viewDiv" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MapTest;
