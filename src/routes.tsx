import Index from "./Pages/Index";
import Bills from "./Pages/Bills";
import Blog from "./Pages/Blog";
import Calendar from "./Pages/Calendar";
import Chat from "./Pages/Chat";
import ContactUs from "./Pages/ContactUs";
import Contacts from "./Pages/Contacts";
import Emails from "./Pages/Emails";
import Files from "./Pages/Files";
import Support from "./Pages/Support";
import Tasks from "./Pages/Tasks";
import Users from "./Pages/Users";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/emails", element: <Emails /> },
  { path: "/chat", element: <Chat /> },
  { path: "/tasks", element: <Tasks /> },
  { path: "/file-management", element: <Files /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/bills", element: <Bills /> },
  { path: "/users", element: <Users /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/support", element: <Support /> },
];

export default routes;
