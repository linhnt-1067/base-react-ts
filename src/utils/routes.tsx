import { lazy } from 'react';
import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
} from 'react-router-dom';

const HomePage = lazy(() => import('app/pages/HomePage'));

export const routes: (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];

export const DEFAULT_ROUTE_PATH = '/';
