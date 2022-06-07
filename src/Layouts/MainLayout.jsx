import React from "react";
import NavbarDesk from "../Components/NavbarDesk";
import NavbarMob from "../Components/NavbarMob";
import MainNav from "../Components/Nav";
import MusicPlayerDesk from "../Components/MusicPlayerDesk";
import MusicPlayerMob from "../Components/MusicPlayerMob";
import NavMob from "../Components/NavMob";

const MainLayout = ({ children, component }) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <NavbarDesk />
        <div className="col-span-6 lg:col-span-5 lg:!p-3 lg:!px-6 p-2 mb-32">
          {component === "search" ? "" : <MainNav />}
          {children}
        </div>
      </div>
      <MusicPlayerDesk />
      <MusicPlayerMob />
      <NavMob />
      <NavbarMob />
    </>
  );
};

export default MainLayout;
