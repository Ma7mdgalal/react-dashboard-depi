import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";
import Posts from "./components/pages/Posts";
import Settings from "./components/pages/Setting";
import Competitor from "./components/pages/Competitor";
import NotFound from "./components/error404/Notfound";
import ProfileManage from "./components/pages/ProfileManage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/competitor" element={<Competitor />} />
        <Route path="/settings/notifications" element={<Settings />} />
        <Route path="settings/profile" element={<ProfileManage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
