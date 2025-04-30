import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";
import Posts from "./components/pages/Posts";
import Engagement from "./components/pages/Engagement";
import Settings from "./components/pages/Setting";
import Competitor from "./components/pages/Competitor";
import NotFound from "./components/error404/Notfound";
import ProfileManage from "./components/pages/ProfileManage";
import Landing from "./components/pages/Landing";
import Signin from "./components/pages/Signin";
import Login from "./components/pages/Login";
import Selection from "./components/pages/Selection";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // list of paths where navbar should be hidden
  const hideNavbarPaths = ["/", "/signin", "/login", "/selection"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/competitor" element={<Competitor />} />
        <Route path="/settings/notifications" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileManage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
