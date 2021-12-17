/*
 * @Author: wxj
 * @Date: 2021-12-16 17:26:46
 * @LastEditTime: 2021-12-17 09:50:51
 * @LastEditors: wxj
 * @Description:
 * @FilePath: \XS_IndustryHighQuality.App\src\pages\about\index.tsx
 */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../../store/states/counterSlice';

const style = css`
  color: red;
`;

const About = () => {
  const count = useSelector<Store>((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div css={style}>
      about count:{count}
      <Button type="primary" onClick={() => dispatch(increment())}>
        增加
      </Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        减少
      </Button>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/maptest">maptest</Link>
      </div>
    </div>
  );
};
export default About;
