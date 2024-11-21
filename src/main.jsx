import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'
import Error from './pages/Error/Error';
import DonationProvider from './providers/DonationProvider'
import CampaignsPage from './pages/CampaignsPage/CampaignsPage'
import DonationDetails from './pages/DonationDetails/DonationDetails'
import Dashboard from './pages/Dashboard/Dashboard'
import HowToHelp from './pages/HowToHelp/HowToHelp'
import UpdateProfile from './pages/UpdateProfile/UpdateProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/dashboard',
        element: <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      },
      {
        path: '/donation-campaigns',
        element: <CampaignsPage />
      },
      {
        path: '/donation-campaigns/:id',
        element:
          <PrivateRoute>
            <DonationDetails />
          </PrivateRoute>
      },
      {
        path: '/help',
        element: <HowToHelp />
      },
      {
        path: '/update-profile',
        element: <PrivateRoute>
          <UpdateProfile />
        </PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DonationProvider>
        <RouterProvider router={router} />
      </DonationProvider>
    </AuthProvider>
  </StrictMode>,
)
