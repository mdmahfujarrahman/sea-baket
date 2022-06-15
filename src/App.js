import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Articles from './components/Dashboard/Articles/Articles';
import AddCategory from "./components/Dashboard/Category/AddCategory";
import Category from './components/Dashboard/Category/Category';
import UpdateCategory from './components/Dashboard/Category/UpdateCategory';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddFaqs from './components/Dashboard/Faqs/AddFaqs';
import Faqs from './components/Dashboard/Faqs/Faqs';
import UpdateFaqs from './components/Dashboard/Faqs/UpdateFaqs';
import AddBlogs from './components/Dashboard/Guides/AddBlogs';
import Guides from './components/Dashboard/Guides/Guides';
import UpdateBlogs from './components/Dashboard/Guides/UpdateBlogs';
import Settings from './components/Dashboard/Settings/Settings';
import UpdateBanner from './components/Dashboard/Settings/UpdateBanner';
import UpdateLogo from './components/Dashboard/Settings/UpdateLogo';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Signup from './components/Login/Signup/Signup';
import Navbar from './components/Sheard/Navbar';
import NotFound from './components/Sheard/NotFound';

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route
                  path="/dashboard"
                  element={
                      <RequireAuth>
                          <Dashboard />
                      </RequireAuth>
                  }
              >
                  <Route index element={<Category />} />
                  <Route path="category/:id" element={<UpdateCategory />} />
                  <Route path="category/add" element={<AddCategory />} />
                  <Route path="faqs" element={<Faqs />} />
                  <Route path="faqs/:id" element={<UpdateFaqs />} />
                  <Route path="faqs/add" element={<AddFaqs />} />
                  <Route path="guides" element={<Guides />} />
                  <Route path="guides/:id" element={<UpdateBlogs />} />
                  <Route path="guides/add" element={<AddBlogs />} />
                  <Route path="articles" element={<Articles />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="settings/update-logo" element={<UpdateLogo />} />
                  <Route path="settings/update-banner" element={<UpdateBanner />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
