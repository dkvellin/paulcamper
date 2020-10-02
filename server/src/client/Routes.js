import App from './App';
import HomePage from './pages/HomePage';
import CampersListPage from './pages/CampersListPage';
import CamperDetailsPage from './pages/CamperDetailsPage';

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
      {
        ...CamperDetailsPage,
        path: '/camper/:id',
      },
    ],
  },
];
