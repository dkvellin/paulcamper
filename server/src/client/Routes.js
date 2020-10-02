import Home from './components/Home';
import CampersList, { loadData } from './components/CampersList';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/campers',
    component: CampersList,
    exact: true,
  },
];
