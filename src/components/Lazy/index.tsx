/* eslint-disable react/display-name */
/*
 * @Author: wxj
 * @Date: 2021-12-17 09:25:22
 * @LastEditTime: 2021-12-17 09:49:40
 * @LastEditors: wxj
 * @Description: 懒加载组件
 * @FilePath: \XS_IndustryHighQuality.App\src\components\Lazy\index.tsx
 */
import { message } from 'antd';
import React, { Suspense, lazy as reactLazy } from 'react';

const lazy = (Component: React.ElementType) => () =>
  (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  );

const Lazy = ({ url }: { url: string }) => {
  const lazyContent = () =>
    import(`../../pages${url}`).catch((err) => {
      message.error('组件引用路径错误');
    });
  const Component = lazy(reactLazy(lazyContent));
  return <Component />;
};

export default Lazy;
