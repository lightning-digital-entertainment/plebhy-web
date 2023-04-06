/* eslint-disable object-curly-newline */
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
import { GifLibrary, GifPage, LibraryRoot, StickerLibrary } from './features/library/routes';
import { ApiPage } from './features/api';

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
      {
        path: 'library',
        element: <LibraryRoot />,
        children: [
          { path: 'gif', element: <GifLibrary /> },
          { path: 'sticker', element: <StickerLibrary /> },
        ],
      },
      { path: 'id/:gifId', element: <GifPage /> },
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
