import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";
import Posts from "./components/pages/Posts";
import Engagement from "./components/pages/Engagement";
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
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/competitor" element={<Competitor />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profileManage" element={<ProfileManage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
