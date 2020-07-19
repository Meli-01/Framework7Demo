import HomePage from '../pages/home.f7.html';
import GpsPage from '../pages/gps.f7.html';
import CameraPage from '../pages/camera.f7.html';
import ContactPage from '../pages/contacts.f7.html';
import ApiPage from '../pages/api.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/gps/',
    component: GpsPage,
  },
  {
    path: '/camera/',
    component: CameraPage,
  },
  {
    path: '/contacts/',
    component: ContactPage
  },
  {
    path: '/api/',
    component: ApiPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
