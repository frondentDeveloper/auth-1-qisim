import React, { useEffect, useState } from 'react';
import Register from './Auth/Register';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './Auth/login';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
