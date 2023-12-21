import React, { createContext, useEffect, useState } from "react";
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
export const DrinksMenuContext = createContext();
export const RoomsMenuContext = createContext();

function App() {
  const [orderedItems, setOrderedItems] = useState([]);
  const [drinksMenu, setDrinksMenu] = useState([]);
  const [roomsMenu, setRoomsMenu] = useState([]);

  // TODO: Fetch API from server
  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((response) => response.json())
      .then((json) => setDrinksMenu(json));
  }, []);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((response) => response.json())
      .then((json) => setRoomsMenu(json));
  });

  return (
    <OrderContext.Provider value={{ orderedItems, setOrderedItems }}>
      <DrinksMenuContext.Provider value={{ drinksMenu, setDrinksMenu }}>
        <RoomsMenuContext.Provider value={{ roomsMenu, setRoomsMenu }}>
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
        </RoomsMenuContext.Provider>
      </DrinksMenuContext.Provider>
    </OrderContext.Provider>
  );
}

export default App;
