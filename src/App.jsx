import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "@components/SideBar/SideBar.jsx";
import MenuPage from "@pages/menu/MenuPage.jsx";
import DrinksMenu from "@pages/menu/DrinksMenu.jsx";
import RoomsMenu from "@pages/menu/RoomsMenu.jsx";
import PromosPage from "@pages/PromosPage.jsx";
import NotificationPage from "@pages/NotificationPage.jsx";
import DashboardPage from "@pages/DashboardPage.jsx";
import SettingsPage from "@pages/settings/SettingsPage.jsx";
import RoomsSettings from "@pages/settings/RoomsSettings.jsx";
import DrinksSettings from "@pages/settings/DrinksSettings.jsx";

export const OrderContext = createContext();

function App() {
  const [orderedItems, setOrderedItems] = useState([]);

  return (
    <OrderContext.Provider value={{ orderedItems, setOrderedItems }}>
      <div className="flex h-screen w-full overflow-hidden bg-[#dcdcdc]">
        <SideBar />
        <Routes>
          <Route path="/" element={<MenuPage />}>
            <Route path="drinks" element={<DrinksMenu />}></Route>
            <Route path="rooms" element={<RoomsMenu />}></Route>
          </Route>
          <Route path="promos" element={<PromosPage />}></Route>
          <Route path="notification" element={<NotificationPage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="settings" element={<SettingsPage />}>
            <Route path="rooms" element={<RoomsSettings />} />
            <Route path="drinks" element={<DrinksSettings />} />
          </Route>
        </Routes>
      </div>
    </OrderContext.Provider>
  );
}

export default App;
