import HomePage from './pages/HomePage';
import CampersListPage from './pages/CampersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...CampersListPage,
    path: '/campers',
  },
];
