import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { I18nextProvider, useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { DEFAULT_ROUTE_PATH, routes } from 'utils/routes';

export function App() {
  const { i18n } = useTranslation();

  const getRoutes = () =>
    routes.map((prop, index) => <Route key={index} {...prop} />);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Helmet
          titleTemplate="Motorbike app"
          defaultTitle="Motorbike app"
          htmlAttributes={{ lang: i18n.language }}
        />

        <Suspense fallback={null}>
          <Routes>
            {getRoutes()}
            <Route
              path="*"
              element={<Navigate to={DEFAULT_ROUTE_PATH} replace />}
            />
          </Routes>
        </Suspense>
        <GlobalStyle />
      </BrowserRouter>
    </I18nextProvider>
  );
}
