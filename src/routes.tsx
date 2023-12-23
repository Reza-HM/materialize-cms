import React from "react";
import Index from "./Pages/Index";
import Bills from "./Pages/Bills";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Contacts from "./Pages/Contacts";
import Emails from "./Pages/Emails";
import Files from "./Pages/Files";
import Support from "./Pages/Support";
import Tasks from "./Pages/Tasks";
import Users from "./Pages/Users";
import Products from "./Pages/Products";

interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
  { path: "/emails", element: <Emails /> },
  { path: "/tasks", element: <Tasks /> },
  { path: "/file-management", element: <Files /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/bills", element: <Bills /> },
  { path: "/users", element: <Users /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/support", element: <Support /> },
];

export default routes;
