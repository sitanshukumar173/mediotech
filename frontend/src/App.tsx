import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import HomePage from './Pages/Homepage/HomePage';
import { NotFound } from './Pages/Error/NotFound';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

// Admin Components
import { AuthProvider } from './admin/context/AuthContext';
import AdminLogin from './admin/pages/AdminLogin';
import AdminRoute from './admin/components/AdminRoute';
import DashboardLayout from './admin/components/DashboardLayout';
import DashboardHome from './admin/pages/DashboardHome';
import CreateAdmin from './admin/pages/CreateAdmin';
import ProductManagement from './admin/pages/ProductManagement';
import ContactManagement from './admin/pages/ContactManagement';
import DemoRequestManagement from './admin/pages/DemoRequestManagement';
import { DemoRequestProvider } from './context/DemoRequestContext';

function App() {
  return (
    <AuthProvider>
      <DemoRequestProvider>
        <BrowserRouter>
          <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <DashboardLayout />
              </AdminRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="create-admin" element={<CreateAdmin />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="contacts" element={<ContactManagement />} />
            <Route path="demo-requests" element={<DemoRequestManagement />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        </BrowserRouter>
      </DemoRequestProvider>
    </AuthProvider>
  )
}

export default App
