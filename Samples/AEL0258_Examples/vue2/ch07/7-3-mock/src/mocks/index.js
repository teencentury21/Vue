// 引用 Mock.js
import Mock from 'mockjs';

// 引用已定義 Mock API 的回應資料
import getCities from './getCities.json';
import getCityAreas_A from './getCityAreas_A.json';
import getCityAreas_B from './getCityAreas_B.json';
import getCityAreas_C from './getCityAreas_C.json';
import getCityAreas_D from './getCityAreas_D.json';
import getCityAreas_E from './getCityAreas_E.json';
import getCityAreas_F from './getCityAreas_F.json';
import getCityAreas_G from './getCityAreas_G.json';
import getCityAreas_H from './getCityAreas_H.json';
import getCityAreas_I from './getCityAreas_I.json';
import getCityAreas_J from './getCityAreas_J.json';
import getCityAreas_K from './getCityAreas_K.json';
import getCityAreas_M from './getCityAreas_M.json';
import getCityAreas_N from './getCityAreas_N.json';
import getCityAreas_O from './getCityAreas_O.json';
import getCityAreas_P from './getCityAreas_P.json';
import getCityAreas_Q from './getCityAreas_Q.json';
import getCityAreas_T from './getCityAreas_T.json';
import getCityAreas_U from './getCityAreas_U.json';
import getCityAreas_V from './getCityAreas_V.json';
import getCityAreas_W from './getCityAreas_W.json';
import getCityAreas_X from './getCityAreas_X.json';
import getCityAreas_Z from './getCityAreas_Z.json';

// 定義 Mock API
Mock.mock("/api/cities", "get", getCities);
Mock.mock("/api/cities/A/areas", "get", getCityAreas_A);
Mock.mock("/api/cities/B/areas", "get", getCityAreas_B);
Mock.mock("/api/cities/C/areas", "get", getCityAreas_C);
Mock.mock("/api/cities/D/areas", "get", getCityAreas_D);
Mock.mock("/api/cities/E/areas", "get", getCityAreas_E);
Mock.mock("/api/cities/F/areas", "get", getCityAreas_F);
Mock.mock("/api/cities/G/areas", "get", getCityAreas_G);
Mock.mock("/api/cities/H/areas", "get", getCityAreas_H);
Mock.mock("/api/cities/I/areas", "get", getCityAreas_I);
Mock.mock("/api/cities/J/areas", "get", getCityAreas_J);
Mock.mock("/api/cities/K/areas", "get", getCityAreas_K);
Mock.mock("/api/cities/M/areas", "get", getCityAreas_M);
Mock.mock("/api/cities/N/areas", "get", getCityAreas_N);
Mock.mock("/api/cities/O/areas", "get", getCityAreas_O);
Mock.mock("/api/cities/P/areas", "get", getCityAreas_P);
Mock.mock("/api/cities/Q/areas", "get", getCityAreas_Q);
Mock.mock("/api/cities/T/areas", "get", getCityAreas_T);
Mock.mock("/api/cities/U/areas", "get", getCityAreas_U);
Mock.mock("/api/cities/V/areas", "get", getCityAreas_V);
Mock.mock("/api/cities/W/areas", "get", getCityAreas_W);
Mock.mock("/api/cities/X/areas", "get", getCityAreas_X);
Mock.mock("/api/cities/Z/areas", "get", getCityAreas_Z);