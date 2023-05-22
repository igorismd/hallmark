import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../application/router';

const App: FC = () => <RouterProvider router={router} />;

export default App;
