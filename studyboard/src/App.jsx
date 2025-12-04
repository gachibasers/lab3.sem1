import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout.jsx";
import BoardPage from "./components/board/BoardPage.jsx";
import StatsPage from "./components/stats/StatsPage.jsx";
import SettingsPage from "./components/settings/SettingsPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}
