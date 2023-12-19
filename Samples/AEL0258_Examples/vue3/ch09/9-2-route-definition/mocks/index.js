import Mock from 'mockjs';

import postLogin from './postLogin.json';
import getActivityList from './getActivityList.json';
import getActivityInfo1 from './getActivityInfo1.json';
import getActivityInfo2 from './getActivityInfo2.json';
import getActivityInfo3 from './getActivityInfo3.json';

Mock.mock('/api/login', 'post', { code: 200, message: 'success', data: postLogin });
Mock.mock('/api/activity/list', 'get', { code: 200, message: 'success', data: getActivityList });
Mock.mock('/api/activity/info/1', 'get', { code: 200, message: 'success', data: getActivityInfo1 });
Mock.mock('/api/activity/info/2', 'get', { code: 200, message: 'success', data: getActivityInfo2 });
Mock.mock('/api/activity/info/3', 'get', { code: 200, message: 'success', data: getActivityInfo3 });
