import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Articles from './components/Dashboard/Articles/Articles';
import AddCategory from "./components/Dashboard/Category/AddCategory";
import Category from './components/Dashboard/Category/Category';
import UpdateCategory from './components/Dashboard/Category/UpdateCategory';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Faqs from './components/Dashboard/Faqs/Faqs';
import Settings from './components/Dashboard/Settings/Settings';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Signup from './components/Login/Signup/Signup';
import Navbar from './components/Sheard/Navbar';

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
                  <Route path="articles" element={<Articles />} />
                  <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
