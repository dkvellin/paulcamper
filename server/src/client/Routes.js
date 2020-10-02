import App from './App';
import HomePage from './pages/HomePage';
import CampersListPage from './pages/CampersListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...CampersListPage,
        path: '/campers',
      },
    ],
  },
];
