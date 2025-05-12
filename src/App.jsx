import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@shared/Navbar";
import Dashboard from "@pages/Dashboard";
import Analytics from "@pages/Analytics";
import Posts from "@pages/Posts";
import Settings from "@pages/Setting";
import Competitor from "@pages/Competitor";
import NotFound from "./components/error404/Notfound";
import ProfileManage from "@pages/ProfileManage";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import Landing from "./components/pages/Landing";
import Selections from "./components/pages/Selections";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/signup", "/login", "/selections"];
  const shouldHideNavbar = hideNavbarPaths.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/competitor" element={<Competitor />} />
        <Route path="/settings/notifications" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileManage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selections" element={<Selections />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
