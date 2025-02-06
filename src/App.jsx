import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeroUIProvider } from '@heroui/system';
import Sidebar from './components/Sidebar';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import MealDetails from './pages/MealDetails/MealDetails';
import MealContextProvider from './Contexts/MealIdContext';
function App() {
  const Qcleint = new QueryClient()

  const router = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Navigate to={"/"} /> },
      { path: "meal", element: <MealDetails /> },

    ]
  }]);

  return (
    <QueryClientProvider client={Qcleint}>
      <MealContextProvider>

        <HeroUIProvider>

          <RouterProvider router={router} />


          {/* 
        <div className="w-full h-screen bg-slate-800 flex">
        <div className="bg-red-600 h-screen w-1/3"></div>
        <div className="bg-blue-600 h-screen w-2/3"></div>
        </div> */}
        </HeroUIProvider>
      </MealContextProvider>
    </QueryClientProvider>
  )
}

export default App
