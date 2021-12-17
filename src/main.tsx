import esriConfig from '@arcgis/core/config.js';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
esriConfig.assetsPath = './assets';

const basename = '/path/';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
