import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Aboutus from "./pages/Aboutus/Aboutus";
import BlogDetails from "./pages/Blog/BlogDetails";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contactus/Contactus";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contactus" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
