import React from "react";
import NavbarDesk from "../Components/NavbarDesk";
import NavbarMob from "../Components/NavbarMob";
import MainNav from "../Components/Nav";
import MusicPlayerDesk from "../Components/MusicPlayerDesk";
import MusicPlayerMob from "../Components/MusicPlayerMob";
import NavMob from "../Components/NavMob";
import SearchNav from "../Components/SearchNav";

const MainLayout = ({ children, component }) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <NavbarDesk />
        <div className="col-span-6 lg:col-span-5 mb-[140px] lg:mb-20 ">
          {component === "search" ? (
            <SearchNav />
          ) : (
            <MainNav component={component} />
          )}
          <div className="lg:!px-3 px-2">{children}</div>
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
