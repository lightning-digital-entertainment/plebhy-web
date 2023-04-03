import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './routes/Root';
import './index.css';
import Home from './features/home/routes/Home';
import GetStarted from './features/get-started/routes/GetStarted';
import Error from './routes/Error';
import { store } from './store';
import { Library } from './features/library/routes';

const GifPage = React.lazy(() => import('./features/library/routes/GifPage'));
const ApiPage = React.lazy(() => import('./features/api/routes/ApiPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/get-started', element: <GetStarted /> },
      { path: '/library', element: <Library /> },
      { path: '/library/:gifId', element: <GifPage /> },
      { path: '/api', element: <ApiPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
