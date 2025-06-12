import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import {AuthProvider} from './controllers/AuthProvider'
import Router from './routes/Router'

createRoot(document.getElementById('root')).render(
 <>
  <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </>,
)
