/*
|-----------------------------------------
| setting up SiteNav for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Sidebar from "./sidebar";

const SiteNav = ({ isOpen = false,setCurrTitle }: {setCurrTitle: Dispatch<SetStateAction<string>>; isOpen: boolean }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle((pre) => !pre);
  useEffect(() => {
    setToggle(isOpen);
  }, [isOpen]);
  return (
    <main>
      <Sidebar toggle={toggle} handleToggle={handleToggle} toggleButton={true} setCurrTitle={setCurrTitle}/>
    </main>
  );
};
export default SiteNav;
