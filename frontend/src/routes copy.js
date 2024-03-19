import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    exact: 'true',
    path: '/login/signin',
    element: lazy(() => import('./login/signin'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/default',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/basic/button',
        element: lazy(() => import('./views/ui-elements/basic/BasicButton'))
      },
      {
        exact: 'true',
        path: '/basic/badges',
        element: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
      },
      {
        exact: 'true',
        path: '/basic/breadcrumb',
        element: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
      },
      {
        exact: 'true',
        path: '/basic/pagination',
        element: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
      },
      {
        exact: 'true',
        path: '/basic/collapse',
        element: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: 'true',
        path: '/basic/tabs-pills',
        element: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: 'true',
        path: '/forms/form-basic',
        element: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: 'true',
        path: '/tables/bootstrap',
        element: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: 'true',
        path: '/charts/nvd3',
        element: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: 'true',
        path: '/maps/google-map',
        element: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      },
      {
        exact: 'true',
        path: '/foodorder',
        element: lazy(() => import('./foodorders/neworder'))
      },
      {
        exact: 'true',
        path: '/editform/:id',
        element: lazy(() => import('./foodorders/editform'))
      },
      {
        exact: 'true',
        path: '/editmaintain/:id',
        element: lazy(() => import('./repairs/editmaintain'))
      },
      {
        exact: 'true',
        path: '/orderlist',
        element: lazy(() => import('./foodorders/orderlist'))
      },
      {
        exact: 'true',
        path: '/maintain',
        element: lazy(() => import('./repairs/maintain'))
      },
      {
        exact: 'true',
        path: '/maintainlist',
        element: lazy(() => import('./repairs/maintainlist'))
      },
      {
        exact: 'true',
        path: '/room/roominfo',
        element: lazy(() => import('./room/roominfo'))
      },
      {
        exact: 'true',
        path: '/room/getroomdata',
        element: lazy(() => import('./room/getroomdata'))
      },
      {
        exact: 'true',
        path: '/room/editroomdata/:id',
        element: lazy(() => import('./room/editroomdata'))
      },      
      {
        exact: 'true',
        path: '/DTHpaging/paging',
        element: lazy(() => import('./DThpage/DTH'))
       
      },
      {
        exact: 'true',
        path: '/DTHpage/getdata',
        element: lazy(() => import('./DThpage/getdata'))
       
      },
      {
        exact: 'true',
        path: '/DTHpage/editdata/:id',
        element: lazy(() => import('./DThpage/editdata'))
       
      },
      {
        exact: 'true',
        path: '/checki/checkin',
        element: lazy(() => import('./checki/checkin'))
      },
      {
        exact: 'true',
        path: '/checki/checkout',
        element: lazy(() => import('./checki/checkout'))
      },
      {
        exact: 'true',
        path: '/checki/checkorderlist',
        element: lazy(() => import('./checki/checkorderlist'))
      },
    ]
  }
];

export default routes;
