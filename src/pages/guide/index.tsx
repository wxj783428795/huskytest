/*
 * @Author: wxj
 * @Date: 2021-12-16 17:21:02
 * @LastEditTime: 2021-12-17 09:50:11
 * @LastEditors: wxj
 * @Description: 引导页
 * @FilePath: \XS_IndustryHighQuality.App\src\pages\guide\index.tsx
 */

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Guide = () => {
  const count = useSelector<Store, number>((state) => state.counter.value);
  return (
    <div>
      <div>guide</div>
      <div>{count}</div>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/maptest">maptest</Link>
      </div>
    </div>
  );
};

export default Guide;
